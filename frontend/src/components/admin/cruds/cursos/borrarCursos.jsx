import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { getCursos, deleteCurso } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

function BorrarCursos() {

    const [cursos, setCursos] = useState([])
    const [cursoSel, setCursoSel] = useState({});

    useEffect(() => {
        async function cargaCursos() {
            const response = await getCursos()

            if (response.status === 200) {
                setCursos(response.data.cursos)
            }
        }
        cargaCursos()
    }, [])

    const handleSelCurso = (event) => {
        setCursoSel(event.target.value);
        console.log(cursoSel);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este curso?");

        if (confirmDelete) {
        deleteCurso(cursoSel)
        .then ((response) => {
            handleClose()
            window.location.reload()
        })
    .catch((error) => {
      console.log(error);
    });
}
};

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="danger" type="submit" value="Enviar" onClick={handleShow}>Borrar curso</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrar un curso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group as={Col} controlId="idioma">
                                <Form.Select className='mb-3' value={cursoSel} onChange={handleSelCurso}>
                                    {cursos.map((cursos) => (
                                        <option key={cursos._id} value={cursos._id}>
                                            {cursos.idioma} - {cursos.modalidad}: {cursos.dia}, {cursos.horario}
                                        </option>
                                    ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Form>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleDelete}>Borrar curso</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BorrarCursos;