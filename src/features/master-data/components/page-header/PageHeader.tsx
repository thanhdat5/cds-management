import {
  DownloadOutlined,
  PlusOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Flex, Input } from "antd";
import type { ChangeEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  showSearch?: boolean;
  showAddButton?: boolean;
  keyword?: string;
  onKeywordChanged?: (event: ChangeEvent<HTMLInputElement>) => void;
  onExport?: (event: MouseEvent) => void;
  onSync?: (event: MouseEvent) => void;
}
export const PageHeader = ({
  showSearch,
  showAddButton,
  keyword,
  onKeywordChanged,
  onExport,
  onSync,
}: PageHeaderProps) => {
  return (
    <Flex align="flex-end" gap={30} justify="space-between">
      {showSearch ? (
        <Flex style={{ width: 542, maxWidth: "70%" }}>
          <Input
            type="search"
            placeholder="Tìm kiếm"
            value={keyword}
            onChange={onKeywordChanged}
          />
        </Flex>
      ) : (
        <></>
      )}
      <Flex align="center" gap={10} wrap style={{ marginLeft: "auto" }}>
        {onExport ? (
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            iconPosition="start"
            onClick={onExport}
          >
            <Link to="create">Export</Link>
          </Button>
        ) : (
          <></>
        )}
        {onSync ? (
          <Button
            type="primary"
            icon={<ReloadOutlined />}
            iconPosition="start"
            onClick={onSync}
          >
            <Link to="create">Đồng bộ</Link>
          </Button>
        ) : (
          <></>
        )}
        {showAddButton ? (
          <Button type="primary" icon={<PlusOutlined />} iconPosition="start">
            <Link to="create">Thêm mới</Link>
          </Button>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
