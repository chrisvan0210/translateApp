import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { CopyOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import * as Styled from "./styled";

const CopyData = ({ copydata }: { copydata?: string }) => {
    const [copy, setCopy] = useCopyToClipboard();

    return (
        <Styled.Copycon
            onClick={() => setCopy(copydata !== undefined ? copydata : "")}
            className={copydata !== undefined ? "active" : ""}
        >
            {copydata}
            <Styled.Copybtn>
                <CopyOutlined /> Copy
            </Styled.Copybtn>
        </Styled.Copycon>
    );
};

export default CopyData;
