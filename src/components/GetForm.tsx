import { Button, Form, Input, Select, message } from "antd";
import { useState } from "react";
import { AddFormDiv } from "./styled";

interface LanguagesType {
  en: string;
  vn: string;
  cn: string;
  th: string;
}

let baseUrl = "http://localhost:3000/api/";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
function GetForm() {
  const [translate, setTranslate] = useState<LanguagesType>();

  const onFinish = async (values: any) => {
    try {
      const result = await fetch(baseUrl + `/get/all-lang`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(values),
      });
      let data = await result.json();
      setTranslate(data.content);
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
          name="keyword"
          rules={[{ required: true, message: "Please input your username!" }]}
          wrapperCol={{ ...layout.wrapperCol }}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        <div>VN: {translate?.vn}</div>
        <div>CN: {translate?.cn}</div>
        <div>TH: {translate?.th}</div>
      </div>
    </AddFormDiv>
  );
}

export default GetForm;
