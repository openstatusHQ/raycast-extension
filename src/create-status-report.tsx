import { Action, ActionPanel, Form } from "@raycast/api";
import { FormValidation, useForm } from "@raycast/utils";
import { StatusReport } from "./api/schema";

export default function CreateStatusReport() {

  const { handleSubmit } = useForm<StatusReport>({
    onSubmit: async (values) => { console.log(values) },
    validation: {
      title: FormValidation.Required,
      message: FormValidation.Required,
    }

  })
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Create Report" />
        </ActionPanel>
      }
    >
      <Form.TextField id="title" title="Title" />
      <Form.TextArea id="description" title="Description" />
    </Form>
  );
}
