import React, { useState } from "react";
import { Card, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function search(props) {
  const [text, setText] = useState(0);
  const onChange = value => {
    setText(value.target.value)
    console.log(value.target.value)
  }

  return (
    <Card>
      <Row align="middle" gutter={16}>
        <Col span={1}>
          <div style={{ textAlign: "right", fontSize: "18px" }}>
            {" "}
            <SearchOutlined />{" "}
          </div>
        </Col>
        <Col span={22}>
          <Input
            data-testid="search"
            placeholder="input search text"
            onChange={onChange}
            style={{ width: "100%", margin: "8px" }}
          />
        </Col>
        <Col span={1} />
      </Row>
    </Card>
  );
}

export default search;
