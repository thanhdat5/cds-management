import { DataTable } from "@common/components/data-table/DataTable";
import { Pagination } from "antd";
import type { ColumnType } from "antd/es/table";
import { MasterDataPageInner } from "../../../templates/page-inner/PageInner";
import { PageHeader } from "../../../templates/page-header/PageHeader";
import type { Tenor } from "./tenorTypes";
export const TenorPage = () => {
  const columns: ColumnType<Partial<Tenor>>[] = [
    {
      key: "tenorId",
      title: "Mã kỳ hạn",
      dataIndex: "tenorId",
      fixed: "left",
    },
    { key: "tenorName", title: "Tên kỳ hạn", dataIndex: "tenorName" },
    { key: "tenorUnit", title: "Đơn vị kỳ hạn", dataIndex: "tenorUnit" },
    { key: "tenorValue", title: "Giá trị kỳ hạn", dataIndex: "tenorValue" },
    { key: "days", title: "Số ngày quy đổi", dataIndex: "days" },
  ];
  const dataSource: Partial<Tenor>[] = [
    {
      tenorId: "6T",
      tenorName: "6 tháng",
      tenorUnit: "Tháng",
      tenorValue: 6,
      days: 180,
    },
    {
      tenorId: "9T",
      tenorName: "9 tháng",
      tenorUnit: "Tháng",
      tenorValue: 9,
      days: 270,
    },
    {
      tenorId: "12T",
      tenorName: "12 tháng",
      tenorUnit: "Tháng",
      tenorValue: 12,
      days: 360,
    },
  ];

  return (
    <MasterDataPageInner
      breadcrumbItems={[
        {
          title: "Kỳ hạn",
        },
      ]}
      header={
        <PageHeader
          showAddButton
          showSearch
          keyword=""
          onKeywordChanged={() => {}}
        />
      }
      footer={
        <Pagination showSizeChanger total={5000} pageSize={50} align="center" />
      }
    >
      <DataTable<Partial<Tenor>>
        columnNoHeader="STT"
        rowKey="tenorId"
        columns={columns}
        dataSource={dataSource}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </MasterDataPageInner>
  );
};
