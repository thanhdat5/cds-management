import { Flex } from "antd";
import React, { type MouseEvent } from "react";
import styles from "./Steps.module.scss";
import { StepItem } from "./StepItem";

export interface Step {
  key: string;
  label: string;
  disabled?: boolean;
}

interface StepsProps {
  steps: Step[];
  current: string;
  onChange?: (event: MouseEvent, key: string, step: Step) => void;
  style?: React.CSSProperties;
}

export const Steps: React.FC<StepsProps> = ({
  steps,
  current,
  style,
  onChange,
}) => {
  return (
    <Flex className={styles.step} style={style}>
      {steps.map((step) => (
        <StepItem
          key={step.key}
          label={step.label}
          active={step.key === current}
          disabled={step.disabled}
          onClick={(event) =>
            onChange ? onChange(event, step.key, step) : undefined
          }
        />
      ))}
    </Flex>
  );
};
