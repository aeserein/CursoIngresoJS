function mostrar() {

  var nombre, localidad;
  nombre = document.getElementById("elNombre").value;
  localidad = document.getElementById("laLocalidad").value;

  if (nombre=="" || localidad == "") {
      alert("Ingrese los datos")
  } else {
      alert("Usted es " + nombre + " y vive en la localidad de " + localidad);
  }
}
