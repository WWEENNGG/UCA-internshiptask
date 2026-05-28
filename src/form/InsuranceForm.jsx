import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Radio,
  Row,
  Col,
  Card,
} from "antd";

const { Option } = Select;

export default function InsuranceForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Insurance Form Data:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="uca-form"
    >
      <Row gutter={[24, 24]}>
        {/* LEFT - PERSONAL INFO */}
        <Col xs={24} md={12}>
          <Card title="👨👩 Personal Information" className="h-full">
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true }]}
            >
              <Input placeholder="Nguyen Van A" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input placeholder="email@example.com" />
            </Form.Item>

            <Form.Item label="Phone Number" name="phone">
              <Input placeholder="+84..." />
            </Form.Item>

            <Form.Item label="Date of Birth" name="dob">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Gender" name="gender">
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Address" name="address">
              <Input.TextArea rows={2} />
            </Form.Item>
          </Card>
        </Col>

        {/* RIGHT - INSURANCE INFO */}
        <Col xs={24} md={12}>
          <Card title="Insurance Information" className="h-full">
            <Form.Item
              label="Insurance Type"
              name="insuranceType"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select insurance type">
                <Option value="health">Health Insurance</Option>
                <Option value="life">Life Insurance</Option>
                <Option value="travel">Travel Insurance</Option>
                <Option value="vehicle">Vehicle Insurance</Option>
                <Option value="property">Property Insurance</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Coverage Level" name="coverageLevel">
              <Select placeholder="Select coverage">
                <Option value="basic">Basic</Option>
                <Option value="standard">Standard</Option>
                <Option value="premium">Premium</Option>
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Start Date" name="startDate">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="End Date" name="endDate">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Number of Dependents" name="dependents">
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Medical Conditions" name="medicalHistory">
              <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item label="Notes" name="notes">
              <Input.TextArea rows={3} />
            </Form.Item>
          </Card>
        </Col>

        {/* SUBMIT FULL WIDTH */}
        <Col span={24}>
          <Button type="primary" htmlType="submit" block>
            Submit Insurance Request
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
