const pool = require("./db.js");

async function insertarTarea(titulo, descripcion) {
  try {
    const consulta = 'INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)';
    const valores = [titulo, descripcion];
    
    const resultado = await pool.query(consulta, valores);
    
    console.log(`Tarea "${titulo}" insertada con éxito. Registros insertados: ${resultado.rowCount}`);
  } catch (error) {
    console.log('Error:', error);
  }
}

async function actualizarTarea(id, nuevoTitulo, nuevaDescripcion) {
  try {
    const consulta = 'UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3';
    const valores = [nuevoTitulo, nuevaDescripcion, id];
    
    const resultado = await pool.query(consulta, valores);
    
    console.log(`Tarea con ID ${id} actualizada. Registros modificados: ${resultado.rowCount}`);
  } catch (error) {
    console.log('Error:', error);
  }
}

async function eliminarTarea(id) {
  try {
    const consulta = 'DELETE FROM tareas WHERE id = $1';
    const valores = [id];
    
    const resultado = await pool.query(consulta, valores);
    
    console.log(`Tarea con ID ${id} eliminada. Registros eliminados: ${resultado.rowCount}`);
  } catch (error) {
    console.log('Error:', error);
  }
}

async function main() {
    await insertarTarea('Nueva Tarea', 'Descripción de la nueva tarea.');
    await actualizarTarea(1, 'Aprender PostgreSQL', 'Completar todos los ejercicios de la guía de base de datos.');
    await eliminarTarea(2);
}

main();
