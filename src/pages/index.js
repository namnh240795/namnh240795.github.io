import styles from './index.css';
import {
  generateVietlott3D,
  generateVietlott4D,
  generateVietlott645,
  generateVietlott655,
} from '../utils/getVietlott';
import { Row, Col, Avatar, Typography } from 'antd';

export default function indexPage() {
  const Vietlott3D = generateVietlott3D();
  const Vietlott4D = generateVietlott4D();
  const Vietlott645 = generateVietlott645();
  const Vietlott655 = generateVietlott655();

  console.log(Vietlott3D, Vietlott4D, Vietlott645, Vietlott655);

  return (
    <div className={styles.normal}>
      <Row gutter={[16, 16]} type="flex" justify="center" align="center">
        <Col>
          <Typography.Text>Vietlott 3D</Typography.Text>
        </Col>
        {Vietlott3D.map((e, index) => (
          <Col key={`${e}-${index}`}>
            <Avatar style={{ backgroundColor: '#f56' }}>{e}</Avatar>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center" align="center">
        <Col>
          <Typography.Text>Vietlott 4D</Typography.Text>
        </Col>
        {Vietlott4D.map((e, index) => (
          <Col key={`${e}-${index}`}>
            <Avatar style={{ backgroundColor: '#f56' }}>{e}</Avatar>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center" align="center">
        <Col>
          <Typography.Text>Vietlott 6/45</Typography.Text>
        </Col>
        {Vietlott645.map((e, index) => (
          <Col key={`${e}-${index}`}>
            <Avatar style={{ backgroundColor: '#f56' }}>{e}</Avatar>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center" align="center">
        <Col>
          <Typography.Text>Vietlott 6/55</Typography.Text>
        </Col>
        {Vietlott655.map((e, index) => (
          <Col key={`${e}-${index}`}>
            <Avatar style={{ backgroundColor: '#f56' }}>{e}</Avatar>
          </Col>
        ))}
      </Row>
    </div>
  );
}
