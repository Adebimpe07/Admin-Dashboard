import React, { useState, useRef } from "react";
import GalleryGroup from "../contentPage/assets/GalleryGroup.png";
import {
    Button,
    Modal,
    Text,
    Group,
    useMantineTheme,
} from "@mantine/core";
import Cross from "../../../../assets/Icon.png";
import { IconUpload,  IconX } from "@tabler/icons";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
const albumPicviewHeader = () => {
    const [openedOne, setOpenedOne] = useState(false);
    const [openedTwo, setOpenedTwo] = useState(false);
    const theme = useMantineTheme();
    const openRef = useRef<() => void>(null);
    const DeleteModal = () => (
        <Modal
            className='text-[#4A4C58] text-base'
            opened={openedOne}
            onClose={() => setOpenedOne(false)}
            title='Delete News'>
            <p className='text-center text-sm'>
                You are about to delete the selected news, kindly click the button below
                to confirm this acton.
            </p>
            <div className='flex justify-center'>
                <button className='bg-[#A83C3D] py-2 w-full text-[white] rounded mt-8 text-base font-bold'>
                    Delete
                </button>
            </div>
        </Modal>
    );
    const UploadImageModal = (props: Partial<DropzoneProps>) => (
        <Modal
            opened={openedTwo}
            onClose={() => setOpenedTwo(false)}
            title='Add to Gallery'>
            <Dropzone
                onDrop={(files) => console.log("accepted files", files)}
                onReject={(files) => console.log("rejected files", files)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                {...props}
                openRef={openRef}>
                <Group
                    position='center'
                    spacing='xl'
                    style={{
                        minHeight: 200,
                        pointerEvents: "none",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                    <Dropzone.Accept>
                        <IconUpload
                            size={50}
                            stroke={1.5}
                            color={
                                theme.colors[theme.primaryColor][
                                theme.colorScheme === "dark" ? 4 : 6
                                ]
                            }
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <IconX
                            size={50}
                            stroke={1.5}
                            color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <img
                            src={GalleryGroup.src}
                            width={70}
                        />
                    </Dropzone.Idle>
                    <Text
                        size='sm'
                        color='dimmed'
                        inline
                        style={{
                            textAlign: "center",
                            alignItems: "center",
                            width: "25rem",
                        }}>
                        Browse and choose the files you want to upload from your computer
                    </Text>
                </Group>
            </Dropzone>
            <Group
                position='center'
                mt='md'>
                <Button
                    className='bg-greenButton hover:bg-greenButton'
                    onClick={() => openRef.current()}
                    leftIcon={
                        <img
                            src={Cross.src}
                            className='w-6 flex ml-3'
                        />
                    }></Button>
            </Group>
        </Modal>
    );
    return (
        <div className='flex justify-between'>
            <div className='place-items-center'>
                <p className='text-[#252735] text-base font-semibold'>Induction (20)</p>
            </div>
            <div className='flex gap-8'>
                <Button
                    className='bg-greenButton hover:bg-greenButton  h-[40px] text-[13px]'
                    leftIcon={
                        <img
                            src={Cross.src}
                            className='w-3'
                        />
                    }
                    onClick={() => setOpenedTwo(true)}>
                    <p>Upload Image</p>
                    <UploadImageModal />
                </Button>
                <Button
                    className='bg-[#C81107] hover:bg-[#C81007]  h-[40px] text-[13px]'
                    onClick={() => setOpenedOne(true)}>
                    <p>Delete Album</p>
                    <DeleteModal />
                </Button>
            </div>
        </div>
    );
};
export default albumPicviewHeader;
