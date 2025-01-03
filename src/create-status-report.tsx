import { Action, ActionPanel, Form } from "@raycast/api";

export default function CreateStatusReport() {
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
