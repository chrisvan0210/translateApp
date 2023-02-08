import styled from "styled-components";
import { Table } from "antd";
import { CopyOutlined } from "@ant-design/icons";

export const AddFormDiv = styled.div`
    width: 100%;
    button {
        margin: 0 5px;
    }
`;

export const ContentsDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    .results {
        flex: 1;
        max-width: 980px;
        .result-each {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 10px;
            .box-text {
                display: flex;
                flex: 1;
                margin-left: 10px;
                p {
                    background: white;
                    padding: 5px 10px;
                    border-radius: 5px;
                    flex: 1;
                }
            }
        }
    }
`;

export const Copycon = styled.div`
    position: relative;
    display: none;

    &.active {
        display: flex;
        justify-content: space-between;
    }
`;

export const Copybtn = styled.span`
    margin-left: 10px;
    font-size: 12px;
    color: #666;
    cursor: pointer;
    border: 1px dashed #d9d9d9;
    border-radius: 4px;
    padding: 3px 5px;
    background: rgba(0, 137, 0, 0.1);

    &:hover {
        color: #008900;
    }
`;
