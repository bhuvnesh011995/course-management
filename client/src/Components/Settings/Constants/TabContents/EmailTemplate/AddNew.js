/* 
reference only for jodit config

const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        height: '450px',
        width: '100%',
        enableDragAndDropFileToEditor: true,
        buttons: [
            'source',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'ul',
            'ol',
            '|',
            'font',
            'fontsize',
            'brush',
            'paragraph',
            '|',
            'image',
            'table',
            'link',
            '|',
            'left',
            'center',
            'right',
            'justify',
            '|',
            'undo',
            'redo',
            '|',
            'hr',
            'eraser',
            'fullsize',
        ],
        uploader: { insertImageAsBase64URI: true },
        removeButtons: ['brush', 'file'],
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        toolbarAdaptive: true,
        toolbarSticky: true,
        style: {
            background: '#27272E',
            color: 'rgba(255,255,255,0.5)',
        },
    };
*/
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import JoditEditor from "jodit-react";

export default function AddNew({
  data,
  setData,
  addNew,
  update,
  show,
  setShow,
}) {
  const editor = useRef(null);
  const [ready, setReady] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (data) {
      reset(data);
    }
    return () => {
      if (ready) {
        setData(null);
      } else setReady(true);
    };
  }, [ready]);

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {data ? "Update Emial Template" : "Add New Email Template"}
        </Modal.Title>
      </Modal.Header>
      <form
        onSubmit={handleSubmit((formData) => {
          data?._id ? update(data._id, formData) : addNew(formData);
        })}
      >
        <Modal.Body>
          <label>Template Name</label>
          <input
            {...register("name", { required: "this is required field" })}
            type="text"
            class="form-control"
            placeholder="Enter Templete Name"
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
          <label>Subject </label>
          <input
            {...register("subject", { required: "this is required field" })}
            type="text"
            class="form-control"
            placeholder="Enter Subject"
          />
          {errors.subject && (
            <span style={{ color: "red" }}>{errors.subject.message}</span>
          )}
          <label>Email Type </label>
          <select
            {...register("emailType", { required: "this is required field" })}
            class="form-select"
          >
            <option value="">Select Subject</option>
            <option value="leadPayment">Lead Get Payment</option>
            <option value="leadConfirmed">Lead Confirmed</option>
          </select>
          {errors.emailType && (
            <span style={{ color: "red" }}>{errors.emailType.message}</span>
          )}
          <JoditEditor
            ref={editor}
            value={watch("template")}
            onBlur={(newValue) => setValue("template", newValue)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              setShow(false);
            }}
            type="button"
            class="btn btn-dander"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-success">
            Save
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
