-- Crear la tabla de tareas
CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    completada BOOLEAN DEFAULT FALSE
);

-- Insertar una tarea inicial de ejemplo
INSERT INTO tareas (titulo, descripcion) VALUES
('Aprender Node.js', 'Completar los ejercicios de la guía.');