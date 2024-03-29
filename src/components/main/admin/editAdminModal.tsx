import { Button, FileInput, MultiSelect, TextInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons";

export const EditSubAdminModal = () => {
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
    <form className="flex flex-col">
      <div className="flex flex-wrap justify-between">
        <TextInput placeholder="name" label="Name" className="w-[17rem]" />
        <TextInput
          placeholder="password"
          label="Password"
          className="w-[17rem]"
        />
        <TextInput placeholder="email" label="Email" className="w-[17rem]" />
        <MultiSelect
          label="Permission Level"
          placeholder="Pick one"
          data={permissionLevel}
          className="w-[17em]"
        />
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
      <Button py="sm" className="bg-greenButton hover:bg-greenButton">
        Edit Sub admin
      </Button>
    </form>
  );
};
