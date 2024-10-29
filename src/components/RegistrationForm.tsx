import React from 'react';
import { Form, Input, Button, Select, Typography, Card, Upload, message } from 'antd';
import { UserCircle, Mail, Building, FileText, Upload as UploadIcon } from 'lucide-react';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface RegistrationFormProps {
  competitionId: string;
  onSubmit: (values: any) => void;
}

const RegistrationForm = ({ competitionId, onSubmit }: RegistrationFormProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    onSubmit({ ...values, competitionId });
    message.success('Registration submitted successfully!');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <Title level={3}>Registration Form</Title>
      <Paragraph className="text-gray-600 mb-6">
        Please fill out all required information to register for this competition.
      </Paragraph>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
      >
        {/* Team Information */}
        <Title level={4} className="mb-4">Team Information</Title>
        <Form.Item
          name="teamName"
          label="Team Name"
          rules={[{ required: true, message: 'Please enter your team name' }]}
        >
          <Input prefix={<Building className="h-4 w-4 text-gray-400" />} />
        </Form.Item>

        {/* Team Leader Information */}
        <Title level={4} className="mb-4">Team Leader Information</Title>
        <Form.Item
          name="leaderName"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter team leader name' }]}
        >
          <Input prefix={<UserCircle className="h-4 w-4 text-gray-400" />} />
        </Form.Item>

        <Form.Item
          name="leaderEmail"
          label="Email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input prefix={<Mail className="h-4 w-4 text-gray-400" />} />
        </Form.Item>

        {/* Team Members */}
        <Title level={4} className="mb-4">Team Members</Title>
        <Form.List name="members">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <div key={field.key} className="flex gap-4">
                  <Form.Item
                    {...field}
                    label={`Member ${index + 1}`}
                    required={false}
                    className="flex-1"
                  >
                    <Input placeholder="Full Name" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Email"
                    required={false}
                    className="flex-1"
                  >
                    <Input placeholder="Email" type="email" />
                  </Form.Item>
                  <Button 
                    type="text" 
                    className="mt-8" 
                    danger 
                    onClick={() => remove(field.name)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Form.Item>
                <Button 
                  type="dashed" 
                  onClick={() => add()} 
                  block
                  disabled={fields.length >= 4}
                >
                  Add Team Member
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        {/* Project Information */}
        <Title level={4} className="mb-4">Project Information</Title>
        <Form.Item
          name="projectDescription"
          label="Project Description"
          rules={[{ required: true, message: 'Please provide a project description' }]}
        >
          <TextArea 
            rows={4} 
            placeholder="Briefly describe your project idea and how it addresses the challenge"
          />
        </Form.Item>

        <Form.Item
          name="resume"
          label="Team Resume/CV"
          rules={[{ required: true, message: 'Please upload your team resume' }]}
        >
          <Upload.Dragger
            name="resume"
            multiple={false}
            action="/api/upload"
            onChange={info => {
              if (info.file.status === 'done') {
                message.success(`${info.file.name} uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} upload failed`);
              }
            }}
          >
            <p className="ant-upload-drag-icon">
              <UploadIcon className="h-8 w-8 mx-auto text-gray-400" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Submit Registration
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegistrationForm;