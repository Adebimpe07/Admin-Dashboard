import {
  Button,
  FileInput,
  Modal,
  MultiSelect,
  TextInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons";

type CreatesubadminModalprops = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

// function handleCreate() {
//   setSubAdminModal({
//     opened: true,
//     component: <EditSubAdminModal />,
//   });
// }
const CreatesubadminModal = ({
  opened,
  setOpened,
}: CreatesubadminModalprops) => {
  const permissionLevel = [
    { value: "content_manager", label: "Content Manager" },
    { value: "membership_manager", label: "Membership Manager" },
    {
      value: "application_manager",
      label: "Application Manager",
    },
    { value: "assessment_manager", label: "Assessment Manager" },
  ];
  return (
    <Modal opened={opened} onClose={() => setOpened(false)}>
      <form className="flex flex-col">
        <div className="grid grid-cols-2 gap-4">
          <TextInput placeholder="name" label="Name" />
          <TextInput placeholder="password" label="Password" />
          <TextInput placeholder="email" label="Email" />
          <MultiSelect
            label="Permission Level"
            placeholder="Pick one"
            data={permissionLevel}
          />
          {/* 
                <p className="border-b border-[#e5e7eb] text-sm p-1 cursor-pointer"></p>  */}
        </div>
        <div className="flex items-center justify-center mt-8 mb-6">
          <FileInput
            label=""
            placeholder="Upload picture"
            icon={<IconUpload size={14} />}
            classNames={{
              label: "text-align:center",
            }}
          />
        </div>
        <Button
          className="bg-[#38CB89] hover:bg-[#38CB89] h-10 text-base"
          onClick={() => {}}
        >
          Create Sub admin
        </Button>
      </form>
    </Modal>
  );
};

export default CreatesubadminModal;
