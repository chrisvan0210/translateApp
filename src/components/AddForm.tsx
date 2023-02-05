import { Button, Form, Input, Select, message } from "antd";
import { useState } from "react";
import { AddFormDiv } from "./styled";

interface ContentType {
  english: string;
  value: string;
  lang: string;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const AddForm = () => {
  const [form] = Form.useForm();
  const [loadings, setLoadings] = useState<boolean>(false);

  const onFinish = async (values: ContentType) => {
    setLoadings(true);
    try {
      const result = await fetch("/api/add/all-lang", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(values),
      });
      let data = await result.json();
      if (data !== null || data.content) {
        form.resetFields();
        if (data.content) {
          message.success("Added successfully!");
        } else {
          message.success(
            "Updated for " + values.lang + " only cause words already exist!"
          );
        }
      } else {
        message.warning("Add fail!");
      }
    } catch (err) {
      console.log(err);
      message.info("Added Failed!");
    }
    setLoadings(false);
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
          rules={[
            { required: true, message: "Please input english contents!" },
          ]}
          wrapperCol={{ ...layout.wrapperCol }}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Translation"
          name="value"
          rules={[{ required: true, message: "Please input the translation" }]}
          wrapperCol={{ ...layout.wrapperCol }}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Language"
          name="lang"
          rules={[{ required: true, message: "Please select the language!" }]}
        >
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
        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit" loading={loadings}>
            Submit
          </Button>
          <Button
            type="primary"
            danger
            htmlType="button"
            onClick={() => form.resetFields()}
          >
            Clear
          </Button>
        </Form.Item>
      </Form>
    </AddFormDiv>
  );
};

export default AddForm;
