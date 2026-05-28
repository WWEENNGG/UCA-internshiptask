import { Form, Input, Select, Button } from "antd";
const { Option } = Select;

export default function InquiryForm() {
  return (
    <Form
      layout="vertical"
      className="max-w-4xl mx-auto uca-form"
      onFinish={(values) => console.log(values)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Business Email */}
        <Form.Item
          label="Business email"
          name="businessEmail"
          rules={[
            {
              required: true,
              message: "Please enter your business email",
            },
          ]}
        >
          <Input placeholder="you@company.com" />
        </Form.Item>

        {/* Phone Number */}
        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please enter your phone number",
            },
          ]}
        >
          <Input placeholder="+84 ..." />
        </Form.Item>

        {/* First Name */}
        <Form.Item
          label="First name"
          name="firstName"
          rules={[{ required: true, message: "Please enter first name" }]}
        >
          <Input />
        </Form.Item>

        {/* Last Name */}
        <Form.Item
          label="Last name"
          name="lastName"
          rules={[{ required: true, message: "Please enter last name" }]}
        >
          <Input />
        </Form.Item>

        {/* Location */}
        <Form.Item
          label="Where are you located?"
          name="location"
          rules={[{ required: true, message: "Please select location" }]}
        >
          <Select placeholder="Please Select">
            <Option value="vietnam">Vietnam</Option>
            <Option value="singapore">Singapore</Option>
            <Option value="usa">USA</Option>
            <Option value="uk">UK</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        {/* Job Title */}
        <Form.Item
          label="Job title"
          name="jobTitle"
          rules={[{ required: true, message: "Please enter job title" }]}
        >
          <Input />
        </Form.Item>

        {/* Company Name */}
        <Form.Item
          label="Company name"
          name="companyName"
          rules={[{ required: true, message: "Please enter company name" }]}
        >
          <Input />
        </Form.Item>

        {/* Service Country */}
        <Form.Item
          label="Country where service is required"
          name="serviceCountry"
          rules={[
            {
              required: true,
              message: "Please select service country",
            },
          ]}
        >
          <Select placeholder="Please Select">
            <Option value="vietnam">Vietnam</Option>
            <Option value="singapore">Singapore</Option>
            <Option value="usa">USA</Option>
            <Option value="uk">UK</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        {/* Interest - full width */}
        <div className="md:col-span-2">
          <Form.Item
            label="What is your main area of interest?"
            name="interest"
            rules={[
              {
                required: true,
                message: "Please select your area of interest",
              },
            ]}
          >
            <Select placeholder="Please Select">
              <Option value="company-setup">Company Setup</Option>
              <Option value="legal-advisory">Legal Advisory</Option>
              <Option value="tax-accounting">Tax & Accounting</Option>
              <Option value="market-entry">Market Entry Strategy</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Description - full width */}
        <div className="md:col-span-2">
          <Form.Item
            label="Brief description of your enquiry"
            name="description"
            rules={[
              {
                required: true,
                message: "Please describe your enquiry",
              },
            ]}
          >
            <Input.TextArea rows={5} placeholder="Describe your request..." />
          </Form.Item>
        </div>

        {/* Submit button - full width */}
        <div className="md:col-span-2">
          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 text-base font-medium"
            >
              Submit Inquiry
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}
