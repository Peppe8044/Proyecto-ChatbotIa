-- Productos demo
INSERT INTO products (sku, name, description, price, currency, stock, tags) VALUES
('SKU001', 'Cafetera Express', 'Cafetera automática para espresso', 89990, 'CLP', 10, ARRAY['hogar','cocina']),
('SKU002', 'Auriculares Bluetooth', 'Auriculares inalámbricos con cancelación de ruido', 49990, 'CLP', 25, ARRAY['tecnología','audio']),
('SKU003', 'Pack Termos', 'Set de 2 termos acero inoxidable', 19990, 'CLP', 50, ARRAY['hogar','outdoor']);

-- Clientes demo
INSERT INTO customers (name, phone, email, consent_flags, meta) VALUES
('Juan Pérez', '+56911111111', 'juan@demo.cl', '{"marketing":true,"soporte":true}', '{"rango":"VIP"}'),
('María López', '+56922222222', 'maria@demo.cl', '{"marketing":false,"soporte":true}', '{"rango":"Regular"}');

-- Leads demo
INSERT INTO leads (customer_id, score, state, source, updated_at) VALUES
(1, 85.5, 'Hot+', 'WhatsApp', NOW()),
(2, 40.0, 'Cold', 'Instagram', NOW());

-- Órdenes demo
INSERT INTO orders (customer_id, amount, currency, status, payment_ref, ts) VALUES
(1, 89990, 'CLP', 'paid', 'WP-123', NOW()),
(2, 19990, 'CLP', 'pending', 'MP-456', NOW());
