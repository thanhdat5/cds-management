import { Flex, Table, Tooltip } from "antd";
import type { ColumnType } from "antd/es/table";
import type { TableProps } from "antd/lib";
import type { MouseEvent } from "react";
import { memo, useMemo } from "react";
import { Button } from "../button";
import styles from "./DataTable.module.scss";

// Props interface (no any)
export interface DataTableProps<T extends object> extends TableProps<T> {
  dataSource?: T[];
  columns: ColumnType<T>[];
  columnNoHeader?: string;
  actionHeader?: string;
  rowKey: keyof T;
  onEdit?: (event: MouseEvent, item: T) => void;
  onDelete?: (event: MouseEvent, item: T) => void;
}

// Memoized Edit Icon component
const EditIcon = memo(() => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M7.92227 2.92578H2.88084C2.49882 2.92578 2.13244 3.07996 1.86232 3.35439C1.59219 3.62883 1.44043 4.00104 1.44043 4.38915V14.6328C1.44043 15.0209 1.59219 15.3931 1.86232 15.6675C2.13244 15.9419 2.49882 16.0961 2.88084 16.0961H12.9637C13.3457 16.0961 13.7121 15.9419 13.9822 15.6675C14.2524 15.3931 14.4041 15.0209 14.4041 14.6328V9.51095"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3237 1.82961C13.6103 1.53853 13.9989 1.375 14.4041 1.375C14.8092 1.375 15.1978 1.53853 15.4844 1.82961C15.7709 2.12069 15.9318 2.51549 15.9318 2.92714C15.9318 3.33879 15.7709 3.73359 15.4844 4.02467L8.64242 10.9757L5.7616 11.7074L6.4818 8.78063L13.3237 1.82961Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

// Memoized Delete Icon component
const DeleteIcon = memo(() => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M2.16064 4.39062H3.60105H15.1243"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.6839 4.38963V14.6332C13.6839 15.0213 13.5322 15.3936 13.2621 15.668C12.9919 15.9424 12.6256 16.0966 12.2435 16.0966H5.04148C4.65946 16.0966 4.29309 15.9424 4.02296 15.668C3.75283 15.3936 3.60107 15.0213 3.60107 14.6332V4.38963M5.76169 4.38963V2.92626C5.76169 2.53815 5.91345 2.16594 6.18357 1.8915C6.4537 1.61707 6.82008 1.46289 7.2021 1.46289H10.0829C10.4649 1.46289 10.8313 1.61707 11.1014 1.8915C11.3716 2.16594 11.5233 2.53815 11.5233 2.92626V4.38963"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.20203 8.04883V12.4389"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0829 8.04883V12.4389"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

// Main DataTable component
const DataTableComponent = <T extends object>({
  columnNoHeader,
  columns,
  dataSource = [],
  actionHeader = "Thao tác",
  rowKey,
  onEdit,
  onDelete,
  ...props
}: DataTableProps<T>) => {
  // Memoize columns for performance if columns are derived dynamically
  const memoColumns = useMemo(() => columns, [columns]);

  // Memoize the action column if edit/delete actions are present
  const actionColumn = useMemo(() => {
    if (!onEdit && !onDelete) return null;
    return (
      <Table.Column<T>
        fixed="right"
        width={98}
        title={actionHeader}
        render={(_value: unknown, record: T) => (
          <Flex gap={10}>
            {onEdit && (
              <Tooltip title="Chỉnh sửa">
                <Button
                  size="small"
                  type="text"
                  style={{ color: "var(--cds-color-primary)" }}
                  onClick={(e) => onEdit(e, record)}
                  icon={<EditIcon />}
                />
              </Tooltip>
            )}
            {onDelete && (
              <Tooltip title="Xóa">
                <Button
                  size="small"
                  type="text"
                  style={{ color: "var(--cds-color-error)" }}
                  onClick={(e) => onDelete(e, record)}
                  icon={<DeleteIcon />}
                />
              </Tooltip>
            )}
          </Flex>
        )}
        key="action"
      />
    );
  }, [actionHeader, onEdit, onDelete]);

  return (
    <Table<T>
      rowKey={rowKey}
      dataSource={dataSource}
      scroll={{ x: "max-content" }}
      pagination={false}
      className={styles.table}
      {...props}
    >
      {/* Optional row number column */}
      {columnNoHeader && (
        <Table.Column<T>
          title={columnNoHeader}
          render={(_text, _record, index) => index + 1}
          fixed="left"
          width={60}
          key="no"
          align="center"
        />
      )}

      {/* Render dynamic columns */}
      {memoColumns.map(({ key, ...restCol }) => (
        <Table.Column<T> key={String(key)} {...restCol} />
      ))}

      {/* Render actions column only when needed */}
      {actionColumn}
    </Table>
  );
};

export const DataTable = memo(DataTableComponent) as typeof DataTableComponent;
