import { TagOutlined } from "@ant-design/icons";
import { DataTable } from "@common/components";
import { Avatar, Flex } from "antd";
import type { ColumnsType } from "antd/lib/table";
import dayjs from "dayjs";
interface ApprovalRecord {
  key: string;
  executionTime: string;
  status: "APPROVED" | "REVIEW" | "REJECTED";
  approver: string;
  relatedUser: string;
  content: string;
}
export const IssuanceBatchApprovalHistory = () => {
  const columns: ColumnsType<ApprovalRecord> = [
    {
      title: "Thời gian thực hiện",
      dataIndex: "executionTime",
      key: "executionTime",
      render: (value) => dayjs(value).format("DD/MM/YYYY"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case "APPROVED":
            return (
              <Flex align="center" gap={4}>
                <Avatar
                  shape="square"
                  style={{
                    background: "var(--cds-color-primary)",
                    borderRadius: 2,
                  }}
                  icon={<TagOutlined />}
                  size={15}
                />
                Duyệt
              </Flex>
            );
          case "REVIEW":
            return (
              <Flex align="center" gap={4}>
                <Avatar
                  shape="square"
                  style={{
                    background: "#EB2ADE",
                    borderRadius: 2,
                  }}
                  icon={<TagOutlined />}
                  size={15}
                />
                Xem xét lại
              </Flex>
            );
          case "REJECTED":
            return (
              <Flex align="center" gap={4}>
                <Avatar
                  shape="square"
                  style={{
                    background: "var(--cds-color-error)",
                    borderRadius: 2,
                  }}
                  icon={<TagOutlined />}
                  size={15}
                />
                Không duyệt
              </Flex>
            );
          default:
            return status;
        }
      },
    },
    {
      title: "Người phê duyệt",
      dataIndex: "approver",
      key: "approver",
    },
    {
      title: "Người liên quan",
      dataIndex: "relatedUser",
      key: "relatedUser",
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
    },
  ];

  const dataSource: ApprovalRecord[] = [
    {
      key: "1",
      executionTime: "2025-10-10",
      status: "APPROVED",
      approver: "Nguyễn Thế Trí",
      relatedUser: "Nguyễn Thế Trí",
      content: "ES",
    },
    {
      key: "2",
      executionTime: "2025-10-10",
      status: "APPROVED",
      approver: "Nguyễn Thế Trí",
      relatedUser: "Nguyễn Thế Trí",
      content: "FS: Công việc 1: Nghỉ...",
    },
    {
      key: "3",
      executionTime: "2025-10-10",
      status: "REVIEW",
      approver: "Nguyễn Thế Trí",
      relatedUser: "Nguyễn Thế Trí",
      content: "FS: Công việc 2: Phát...",
    },
    {
      key: "4",
      executionTime: "2025-10-10",
      status: "REJECTED",
      approver: "Nguyễn Thế Trí",
      relatedUser: "Nguyễn Thế Trí",
      content: "FS: Công việc 3: Kiểm...",
    },
  ];
  return (
    <DataTable<ApprovalRecord>
      rowKey="key"
      columnNoHeader="STT"
      columns={columns}
      dataSource={dataSource}
    />
  );
};
