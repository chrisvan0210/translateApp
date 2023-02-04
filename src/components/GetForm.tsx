import { Button, Form, Input, Select, message } from "antd";
import { useState } from "react";
import { AddFormDiv, ContentsDiv } from "./styled";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
interface LanguagesType {
  en: string;
  vn: string;
  cn: string;
  th: string;
}

let baseUrl = "http://localhost:3000/api/";
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const initialState = {
  en: "",
  vn: "",
  cn: "",
  th: "",
};

function GetForm() {
  const [translate, setTranslate] = useState<LanguagesType>(initialState);
  const [form] = Form.useForm();
  const [value, copy] = useCopyToClipboard();

  const onFinish = async (values: any) => {
    try {
      const result = await fetch(baseUrl + `/get/all-lang`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(values),
      });
      let data = await result.json();
      if (data !== null && data.content) {
        setTranslate(data.content);
        message.success("Get successfully!");
      } else {
        setTranslate(initialState);
        message.warning("The words are not exist!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onFinishFailed = (err: any) => {
    console.log("failed", err);
  };

  let transArray = Object.keys(translate).map((key) => [
    key,
    translate[key as keyof LanguagesType],
  ]);
  const renderText = transArray.map((item, index) => (
    <div className="result-each" key={index}>
      {translate?.vn && (
        <>
          <div>{item[0].toUpperCase()}: </div>
          <div className="box-text">
            <p>{item[1]}</p>
            <Button type="dashed" onClick={() => copy(item[1])}>
              Copy
            </Button>
          </div>
        </>
      )}
    </div>
  ));

  return (
    <AddFormDiv>
      <Form
        name="basic"
        form={form}
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
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit">
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
      <ContentsDiv>
        <div className="results">{renderText}</div>
      </ContentsDiv>
    </AddFormDiv>
  );
}

export default GetForm;
