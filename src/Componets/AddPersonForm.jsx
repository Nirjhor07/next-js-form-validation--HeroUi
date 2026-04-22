"use client";

import { CirclePlus } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
  TextArea,
} from "@heroui/react";

export const AddPersonForm = ({ createActions }) => {
  return (
    <Modal>
      <Button variant="secondary">Add a Member</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus />
              </Modal.Icon>
              <Modal.Heading>Add a Member</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we will get back to you. The modal
                adapts automatically when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createActions} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Book title</Label>
                    <Input placeholder="Enter your Book title" />
                  </TextField>
                  {/* select genre */}
                  <Select
                    className="w-[256px]"
                    placeholder="Select one"
                    name="genre"
                  >
                    <Label>Select Genre</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item
                          id="scienceFiction"
                          textValue="Science Fiction"
                        >
                          Science Fiction
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="historicalFiction"
                          textValue="Historical Fiction"
                        >
                          Historical Fiction
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="education" textValue="Education">
                          Education
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* SELECT LAMGUAGE OF THE BOOK */}
                  <Select
                    className="w-[256px]"
                    placeholder="Select one"
                    name="language"
                  >
                    <Label>Select Genre</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="English" textValue="English">
                          English
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id=" Bangla" textValue=" Bangla">
                          Bangla
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField className="w-full" name="author">
                    <Label>Author</Label>
                    <Input placeholder="Enter author name" />
                  </TextField>
                  <TextField className="w-full" name="description">
                    <Label>Book Description</Label>
                    <TextArea placeholder="Enter Book Description" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="Submit">Send Message</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
