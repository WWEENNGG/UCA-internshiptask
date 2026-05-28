import { Form, Input, Select, Radio, Button, Row, Col } from "antd";

const { TextArea } = Input;

export default function AIASSitantForm() {
  return (
    <Form layout="vertical" className="max-w-5xl mx-auto p-6 uca-form">
      {/* Row 1 */}
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
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Company Name" name="company">
            <Input placeholder="Company name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Industry" name="industry">
            <Input placeholder="E.g. SaaS, E-commerce..." />
          </Form.Item>
        </Col>
      </Row>

      {/* Row 3 */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Company Size" name="companySize">
            <Select
              options={[
                { value: "1-10", label: "1–10" },
                { value: "11-50", label: "11–50" },
                { value: "51-200", label: "51–200" },
                { value: "200+", label: "200+" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Timezone / Country" name="timezone">
            <Input placeholder="E.g. Vietnam (GMT+7)" />
          </Form.Item>
        </Col>
      </Row>

      {/* Row 4 - Core Service Needs */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Type of Support Needed" name="supportTypes">
            <Select
              mode="multiple"
              placeholder="Select services"
              options={[
                { value: "admin", label: "Admin Support" },
                { value: "email", label: "Email & Calendar" },
                { value: "project", label: "Project Coordination" },
                { value: "cs", label: "Customer Support" },
                { value: "data", label: "Data & Reporting" },
                { value: "research", label: "Research" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Expected Working Hours" name="workload">
            <Radio.Group>
              <Radio value="part">Part-time</Radio>
              <Radio value="full">Full-time</Radio>
              <Radio value="project">Project-based</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      {/* Row 5 */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Tools Used" name="tools">
            <Select
              mode="multiple"
              placeholder="Notion, Slack, Jira..."
              options={[
                { value: "notion", label: "Notion" },
                { value: "slack", label: "Slack" },
                { value: "jira", label: "Jira" },
                { value: "asana", label: "Asana" },
                { value: "google", label: "Google Workspace" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Start Date" name="startDate">
            <Select
              options={[
                { value: "immediate", label: "Immediately" },
                { value: "1week", label: "Within 1 week" },
                { value: "1month", label: "Within 1 month" },
                { value: "flexible", label: "Flexible" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Row 6 */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Team Size Needed" name="teamSize">
            <Select
              options={[
                { value: "1", label: "1 Assistant" },
                { value: "2-3", label: "2–3 Assistants" },
                { value: "team", label: "Dedicated Team" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Budget Range" name="budget">
            <Select
              options={[
                { value: "<1k", label: "< $1,000" },
                { value: "1-3k", label: "$1,000 – $3,000" },
                { value: "3-5k", label: "$3,000 – $5,000" },
                { value: "5k+", label: "$5,000+" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Message full width */}
      <Form.Item label="Describe Your Tasks" name="message">
        <TextArea
          rows={5}
          placeholder="Tell us what your assistant should handle..."
        />
      </Form.Item>

      <Button type="primary" size="large" block>
        Submit Request
      </Button>
    </Form>
  );
}
