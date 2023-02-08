import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";

interface LanguagesType {
    content: {
        en: string;
        vn: string;
        cn: string;
        th: string;
    };
}

const TableForm = ({ allWords }: { allWords: Array<LanguagesType> }) => {
    const [search, setSearch] = useState<string>();
    const [toSearch, setToSearch] = useState<Array<LanguagesType>>(allWords);

    useEffect(() => {
        setToSearch(allWords);
    }, [allWords]);

    const handleSearch = (e: string) => {
        const getData = allWords.filter((toSearch) => toSearch.content.en?.includes(e.toLowerCase()) || toSearch.content.vn?.includes(e.toLowerCase()) || toSearch.content.th?.includes(e.toLowerCase()) || toSearch.content.cn?.includes(e.toLowerCase())
        );
        setToSearch(getData);
    };
    return (
        <>
            <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="table-translate">
                <Row className="table-head">
                    <Col span={5}>
                        <h3>EN</h3>
                    </Col>
                    <Col span={5}>
                        <h3>VN</h3>
                    </Col>
                    <Col span={5}>
                        <h3>TH</h3>
                    </Col>
                    <Col span={5}>
                        <h3>CN</h3>
                    </Col>
                    <Col span={4}>
                        <h3>Action</h3>
                    </Col>
                </Row>
                {toSearch.map((data, index) => {
                    return (
                        <Row key={index} className="table-body">
                            <Col span={5}>
                                <div>{data.content.en}</div>
                            </Col>
                            <Col span={5}>
                                <div>{data.content.vn}</div>
                            </Col>
                            <Col span={5}>
                                <div>{data.content.th}</div>
                            </Col>
                            <Col span={5}>
                                <div>{data.content.cn}</div>
                            </Col>
                            <Col span={4}>
                                <button>Edit</button>
                            </Col>
                        </Row>
                    );
                })}
            </div>
        </>
    );
};

export default TableForm;
