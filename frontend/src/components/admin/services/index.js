import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getUsuarios() {
  try {
    const response = await axios({
      url: `${baseUrl}/usuarios`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getCursos() {
  try {
    const response = await axios({
      url: `${baseUrl}/cursos`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getIdiomas() {
  try {
    const response = await axios({
      url: `${baseUrl}/idiomas`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveUsuario(usuarioData) {
  const formData = new FormData();
  formData.append("user", usuarioData.user);
  formData.append("nombre", usuarioData.nombre);
  formData.append("apellido", usuarioData.apellido);
  formData.append("fechadenac", usuarioData.fechadenac);
  formData.append("dni", usuarioData.dni);
  formData.append("telefono", usuarioData.telefono);
  formData.append("email", usuarioData.email);
  formData.append("password", usuarioData.password);
  formData.append("imagen", usuarioData.imagen);
  formData.append("categoria", usuarioData.categoria);

  try {
    const response = await axios({
      url: `${baseUrl}/usuarios`,
      method: "POST",
      data: formData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveCursos(cursosData) {
  const formData = new FormData();
  formData.append("idioma", cursosData.idioma);
  formData.append("imagen", cursosData.imagen);
  formData.append("dia", cursosData.dia);
  formData.append("horario", cursosData.horario);
  formData.append("modalidad", cursosData.modalidad);
  try {
    const response = await axios({
      url: `${baseUrl}/cursos`,
      method: "POST",
      data: formData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveIdioma(idiomaData) {
  const formData = new FormData();
  formData.append("nombre", idiomaData.nombre);
  formData.append("descripcion", idiomaData.descripcion);
  formData.append("paises", idiomaData.paises);
  formData.append("boton", idiomaData.boton);
  formData.append("imagen", idiomaData.imagen);
  try {
    const response = await axios({
      url: `${baseUrl}/idiomas`,
      method: "POST",
      data: formData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function updateUsuarios(_id, datosNuevos) {

  try {
    const response = await axios({
      url: `${baseUrl}/usuarios/${_id}`,
      method: "PUT",
      data: datosNuevos,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function updateCursos(_id, datosNuevos) {
  try {
    const response = await axios({
      url: `${baseUrl}/cursos/${_id}`,
      method: "PUT",
      data: datosNuevos,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function updateIdioma(_id, datosNuevos) {
  try {
    const response = await axios({
      url: `${baseUrl}/idiomas/${_id}`,
      method: "PUT",
      data: datosNuevos,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteUsuario(_id) {
  try {
    const response = await axios({
      url: `${baseUrl}/usuarios/${_id}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteCurso(_id) {
  try {
    const response = await axios({
      url: `${baseUrl}/cursos/${_id}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteIdioma(_id) {
  try {
    const response = await axios({
      url: `${baseUrl}/idiomas/${_id}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
