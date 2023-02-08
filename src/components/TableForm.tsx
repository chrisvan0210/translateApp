import { CopyOutlined, SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import CopyData from "./CopyData";
import * as Styled from "./styled";

interface LanguagesType {
    content: {
        en: string;
        vn?: string;
        cn?: string;
        th?: string;
    };
    _id: number;
}

const columns = [
    {
        title: "EN",
        dataIndex: "en",
        key: "en",
        render: (index: number, item: LanguagesType) => {
            return <CopyData copydata={item.content.en} />;
        },
    },
    {
        title: "VN",
        dataIndex: "vn",
        key: "vn",
        render: (index: number, item: LanguagesType) => {
            return <CopyData copydata={item.content.vn} />;
        },
    },
    {
        title: "CN",
        dataIndex: "cn",
        key: "cn",
        render: (index: number, item: LanguagesType) => {
            return <CopyData copydata={item.content.cn} />;
        },
    },
    {
        title: "TH",
        dataIndex: "th",
        key: "th",
        render: (index: number, item: LanguagesType) => {
            return <CopyData copydata={item.content.th} />;
        },
    },
    {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: () => {
            return (
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            );
        },
    },
];

const TableForm = ({ allWords }: { allWords: Array<LanguagesType> }) => {
    const [search, setSearch] = useState<string>();
    const [toSearch, setToSearch] = useState<Array<LanguagesType>>(allWords);
    useEffect(() => {
        setToSearch(allWords);
    }, [allWords]);

    const handleSearch = (e: string) => {
        const getData = allWords.filter(
            (toSearch) =>
                toSearch.content.en?.includes(e.toLowerCase()) ||
                toSearch.content.vn?.includes(e.toLowerCase()) ||
                toSearch.content.th?.includes(e.toLowerCase()) ||
                toSearch.content.cn?.includes(e.toLowerCase())
        );
        setToSearch(getData);
    };

    return (
        <>
            <Row style={{ width: "100%" }}>
                <Col span={24}>
                    <Space direction="vertical">
                        <Input
                            allowClear
                            placeholder="Search Word"
                            suffix={
                                <SearchOutlined
                                    style={{
                                        fontSize: 16,
                                        color: "#1890ff",
                                    }}
                                />
                            }
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </Space>
                </Col>
            </Row>
            <Row style={{ width: "100%" }}>
                <Col span={24}>
                    <Table
                        className="table-translate"
                        dataSource={toSearch}
                        columns={columns}
                        rowKey={(record) => record._id}
                        pagination={{ position: ["bottomCenter"] }}
                    />
                </Col>
            </Row>
        </>
    );
};

export default TableForm;
