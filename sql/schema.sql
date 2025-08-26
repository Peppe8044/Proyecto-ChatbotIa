-- Esquema inicial
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  sku VARCHAR(32) NOT NULL,
  name VARCHAR(128) NOT NULL,
  description TEXT,
  price NUMERIC(12,2) NOT NULL,
  currency VARCHAR(8) NOT NULL,
  stock INT NOT NULL,
  tags TEXT[],
  active BOOLEAN DEFAULT TRUE,
  embed_vec VECTOR(1536)
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  phone VARCHAR(32),
  email VARCHAR(128),
  consent_flags JSONB,
  meta JSONB,
  profile_vec VECTOR(1536)
);

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY,
  channel VARCHAR(32),
  customer_id INT REFERENCES customers(id),
  started_at TIMESTAMP,
  last_seen_at TIMESTAMP
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  conversation_id INT REFERENCES conversations(id),
  role VARCHAR(16),
  text TEXT,
  sentiment VARCHAR(16),
  intent VARCHAR(32),
  ts TIMESTAMP
);

CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  score NUMERIC(4,2),
  state VARCHAR(16),
  source VARCHAR(32),
  updated_at TIMESTAMP
);

CREATE TABLE promotions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  rule_json JSONB,
  active BOOLEAN,
  starts_at TIMESTAMP,
  ends_at TIMESTAMP
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  amount NUMERIC(12,2),
  currency VARCHAR(8),
  status VARCHAR(16),
  payment_ref VARCHAR(64),
  ts TIMESTAMP
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  type VARCHAR(32),
  payload_json JSONB,
  ts TIMESTAMP
);

CREATE TABLE consent_logs (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  action VARCHAR(32),
  scope VARCHAR(32),
  ts TIMESTAMP
);
