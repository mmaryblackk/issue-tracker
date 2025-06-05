import { Issue, Status } from "@prisma/client";
import { Flex, Select, Text } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const EditStatus = ({ issue }: { issue: Issue }) => {
  const router = useRouter();

  const statuses: { label: string; value: Status }[] = [
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];

  const changeStatus = async (newStatus: Status) => {
    try {
      await axios.patch(`/api/issues/${issue.id}`, {
        status: newStatus,
      });
    } catch (error) {}
  };
  return (
    <Flex gap="4" align="center">
      <Text className="font-bold">Status</Text>
      <Select.Root
        defaultValue={issue.status}
        onValueChange={(val) => changeStatus(val as Status)}
      >
        <Select.Trigger
          placeholder="Select status"
          className="!cursor-pointer"
        />
        <Select.Content>
          <Select.Group>
            <Select.Label>Status</Select.Label>
            {statuses.map((status) => (
              <Select.Item
                key={status.value}
                value={status.value}
                className="!cursor-pointer"
              >
                {status.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default EditStatus;
