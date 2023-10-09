import React, { useState, useEffect } from 'react';
import { getCursos } from './services';
import Image from 'react-bootstrap/esm/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ActCursos from './cruds/cursos/actCursos';
import BorrarCursos from './cruds/cursos/borrarCursos';
import CrearCursos from './cruds/cursos/crearCursos';

export const AdmCursos = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        async function cargaCursos() {
            const response = await getCursos()

            if (response.status === 200) {
                setCursos(response.data.cursos)
            }
        }
        cargaCursos()
    }, [])

    if (!cursos.length) {
        return <div className='text-center'>Cargando contenido...</div>
    }

    return (
        <><Container className='d-flex justify-content-around fluid w-50'>

            <CrearCursos />
            <ActCursos />
            <BorrarCursos />

        </Container>
            <Container className=' fluid'>
                {cursos.map(({_id, idioma, dia, horario, imagen, modalidad }) => (

                    <ListGroup key={_id} as="ol" numbered className='m-3' style={{ border: '3px solid grey' }}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Idioma</div>
                                <h3> {idioma}</h3>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Bandera</div>
                                <Image style={{ border: '3px solid grey', height: '3rem', width: 'auto' }} className='shadow mb-2' src={process.env.PUBLIC_URL + imagen} rounded />
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Día/s de cursada</div>
                                {dia}
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Horario</div>
                                {horario}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Modalidad de cursada</div>
                                {modalidad}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </Container></>
    );
};
export default AdmCursos