import { Button, Form, Input, Select, message } from "antd";
import { AddFormDiv } from "./styled";

interface ContentType {
  english: string;
  value: string;
  lang: string;
}

let baseUrl = "http://localhost:3000/api/";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const AddForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: ContentType) => {
   
    form.resetFields();
    try {
      const result = await fetch(baseUrl + `/add/all-lang`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(values),
      });
      //   console.log(await result.json());
      message.success("Added successfully!");
    } catch (err) {
      console.log(err);
      message.info("Added Failed!");
    }
  };
  const onFinishFailed = (err: any) => {
    console.log("failed", err);
  };

  return (
    <AddFormDiv>
      <Form
        form={form}
        name="basic"
        {...layout}
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="English Contents"
          name="english"
          rules={[{ required: true, message: "Please input your username!" }]}
          wrapperCol={{ ...layout.wrapperCol }}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Translation"
          name="value"
          rules={[{ required: true, message: "Please input your password!" }]}
          wrapperCol={{ ...layout.wrapperCol }}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Language" name="lang">
          <Select
            style={{ width: 120 }}
            options={[
              { value: "vn", label: "VN" },
              { value: "cn", label: "CN" },
              { value: "th", label: "TH" },
            ]}
            placeholder="select"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </AddFormDiv>
  );
};

export default AddForm;
