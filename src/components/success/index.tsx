import { Modal } from "@mantine/core";
import React from "react";

const Success = ({ message, opened }) => {
    return (
        <Modal opened={opened} withCloseButton={false} onClose={() => {}}>
            {message}
        </Modal>
    );
};

export default Success;
