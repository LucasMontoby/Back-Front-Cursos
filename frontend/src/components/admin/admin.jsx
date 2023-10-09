
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/esm/Container';
import AdmCursos from './admCursos';
function Admin() {

  const [key, setKey] = useState('cursos');

  return (
    <Container className='my-4 px-0 pb-3' style={{border: '0.1rem solid rgba(10, 10, 10, 0.1)', borderRadius:'0.5rem'}}>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab title=" " ></Tab>
        <Tab eventKey="cursos" title="Cursos">
          <AdmCursos />
        </Tab>

      </Tabs>
    </Container>
  );
}

export default Admin
