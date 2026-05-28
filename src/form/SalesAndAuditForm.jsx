import { Form, Input, Select, Button, Radio, Row, Col } from "antd";

const { TextArea } = Input;

export default function SalesOpsAuditForm() {
  return (
    <Form layout="vertical" className="uca-form">
      {/* ================= ROW 1 ================= */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
        </Col>
      </Row>

      {/* ================= ROW 2 ================= */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Company Name" name="company">
            <Input placeholder="Your company name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Phone / WhatsApp" name="phone">
            <Input placeholder="+84..." />
          </Form.Item>
        </Col>
      </Row>

      {/* ================= ROW 3 ================= */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Country / Location" name="country">
            <Input placeholder="Your location" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="CRM Usage" name="crm">
            <Select
              placeholder="Select CRM usage level"
              options={[
                { label: "None", value: "none" },
                { label: "Basic spreadsheets", value: "basic" },
                { label: "CRM system in use", value: "crm" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* ================= ROW 4 ================= */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Sales System Status" name="salesSystem">
            <Radio.Group>
              <Radio value="none">No system</Radio>
              <Radio value="basic">Basic</Radio>
              <Radio value="advanced">Advanced</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Priority Focus" name="priority">
            <Radio.Group>
              <Radio value="sales">Sales</Radio>
              <Radio value="operations">Operations</Radio>
              <Radio value="both">Both</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      {/* ================= FULL WIDTH ================= */}
      <Form.Item label="Current Business Challenges" name="challenges">
        <Select
          mode="multiple"
          placeholder="Select all that apply"
          options={[
            { label: "Low sales performance", value: "low_sales" },
            { label: "Inefficient operations", value: "inefficiency" },
            { label: "Scaling issues", value: "scaling" },
            { label: "High operational cost", value: "high_cost" },
          ]}
        />
      </Form.Item>

      <Form.Item label="Project Details / Message" name="message">
        <TextArea rows={4} placeholder="Describe your situation in detail..." />
      </Form.Item>

      {/* ================= SUBMIT ================= */}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Book Free Audit Consultation
        </Button>
      </Form.Item>
    </Form>
  );
}
