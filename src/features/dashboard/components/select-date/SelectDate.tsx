import { CalendarOutlined } from "@ant-design/icons";
import { IconCard } from "@common/components";
import { DatePicker, Flex } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";
import styles from "./SelectDate.module.scss";

export const SelectDate = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(() => [
    dayjs(),
    dayjs().add(1, "day"),
  ]);
  return (
    <button
      type="button"
      className={styles.pickerTogger}
      onClick={() => setPanelVisible(!panelVisible)}
    >
      <IconCard icon={<CalendarOutlined />} />
      <Flex
        vertical
        gap={4}
        align="flex-start"
        justify="center"
        className={styles.calendarInfo}
      >
        <div>Thời gian</div>
        <span>
          {dates
            ? `${dates[0].format("DD/MM/YYYY")} - ${dates[1].format(
                "DD/MM/YYYY"
              )}`
            : "Vui lòng chọn thời gian"}
        </span>
      </Flex>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9891 16.4717C11.758 16.4697 11.5368 16.378 11.372 16.216L2.64477 7.48875C2.48579 7.32415 2.39782 7.1037 2.39981 6.87487C2.4018 6.64605 2.49359 6.42716 2.6554 6.26535C2.81721 6.10353 3.0361 6.01175 3.26492 6.00976C3.49375 6.00777 3.7142 6.09574 3.8788 6.25471L11.9891 14.365L20.0993 6.25471C20.1798 6.17136 20.2761 6.10487 20.3826 6.05914C20.4891 6.0134 20.6036 5.98932 20.7195 5.98831C20.8354 5.98731 20.9503 6.00939 21.0575 6.05327C21.1648 6.09715 21.2622 6.16195 21.3442 6.2439C21.4261 6.32584 21.4909 6.42328 21.5348 6.53054C21.5787 6.63779 21.6008 6.75271 21.5997 6.86859C21.5987 6.98447 21.5747 7.09899 21.5289 7.20547C21.4832 7.31194 21.4167 7.40824 21.3333 7.48875L12.6061 16.216C12.4413 16.378 12.2201 16.4697 11.9891 16.4717Z"
          fill="#B9BBBD"
        />
      </svg>
      <DatePicker.RangePicker
        placement="bottomRight"
        open={panelVisible}
        styles={{
          root: {
            pointerEvents: "none",
            opacity: 0,
            position: "absolute",
            bottom: 0,
            insetInlineStart: 0,
          },
        }}
        onChange={(ranges) => {
          if (ranges?.[0] && ranges?.[1]) {
            setDates([ranges[0], ranges[1]]);
          } else {
            setDates(null);
          }
          setPanelVisible(false);
        }}
      />
    </button>
  );
};
