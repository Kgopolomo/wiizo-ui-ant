import React, { useState } from "react";
import {
  Steps,
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Upload,
  Checkbox,
  message,
  Tag
} from "antd";
import { InboxOutlined, UploadOutlined,FolderOutlined } from "@ant-design/icons";

import TitleHeader from "../components/TitleHeader";

const { Dragger } = Upload;
const { Step } = Steps;
const { Option } = Select;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const categories = [
  { id: "ELECTRONICS", name: "Electronics" },
  { id: "CLOTHING", name: "Clothing" },
  { id: "BOOKS", name: "Books" },
  // ... add more categories
];


const customizeRequiredMark = (label, { required }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);


const CreateItemForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [title, setTitle] = useState("");
const [image, setImage] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState(null);
const [brand, setBrand] = useState("");
const [model, setModel] = useState("");
const [serial, setSerial] = useState("");
const [rentalPrice, setRentalPrice] = useState("");
const [minRentalDuration, setMinRentalDuration] = useState("");
const [maxRentalDuration, setMaxRentalDuration] = useState("");
const [lateReturnPolicy, setLateReturnPolicy] = useState("");
const [rentalPeriod, setRentalPeriod] = useState(null);
const [availableDate, setAvailableDate] = useState(null);

const [pickupInfo, setPickupInfo] = useState("");
const [condition, setCondition] = useState(null);
const [usageInstructions, setUsageInstructions] = useState("");
const [cancellationPolicy, setCancellationPolicy] = useState("");
const [refundPolicy, setRefundPolicy] = useState("");
const [deliveryOptions, setDeliveryOptions] = useState([]);


const [requiredMark, setRequiredMarkType] = useState('optional');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

const formData = {
  title,
  description,
  category,
  brand,
  model,
  image,
  rentalPrice,
  minRentalDuration,
  maxRentalDuration,
  lateReturnPolicy,
  rentalPeriod,
  availableDate,
  pickupInfo,
  condition,
  usageInstructions,
  cancellationPolicy,
  refundPolicy,
  deliveryOptions
};
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

 

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleAcceptTermsChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  return (
    <>
    <TitleHeader title="Create new Item" icon={FolderOutlined}/>
    <div style={{ width: "55%", margin: "0 auto", marginTop: "50px" }}>
      <Steps current={currentStep}>
        <Step title="Basic Information" />
        <Step title="Rental Details" />
        <Step title="Policies" />
        <Step title="Upload Image" />
        <Step title="Review" />
      </Steps>
      <Form
        style={{ marginTop: 25 }}
   
        // onValuesChange={handleFormChange}
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onFinish={handleSubmit}
        layout="vertical" // Use vertical layout for inline form fields
      >
        {currentStep === 0 && (
          <>
            <h2>Review Your Item Details</h2>

            <Form.Item
              name="title"
              
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              rules={[
                {
                  required: true,
                  message:
                    "You must accept the terms and conditions to proceed.",
                },
              ]}
            >
              <Input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Item>

            <Form.Item
              name="category"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Select
                defaultValue="Select Category"
                onChange={(value) => setCategory(value)}
           
                value={category}
                options={[
                  {
                    value: "Select Category",
                    label: "Select Category",
                    disabled: true,
                  },
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="description"
              required
              style={{ width: "calc(100% - 8px)" }}
            >
              <Input.TextArea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Item>
            <Form.Item
              name="condition"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Select
                defaultValue="Select Condition"
                value={condition}
                
                onChange={(value) => setCondition(value)}
                options={[
                  { value: null, label: "Select Condition", disabled: true },
                  { value: "NEW", label: "New" },
                  { value: "LIKE_NEW", label: "Like New" },
                  { value: "FAIR", label: "Fair" },
                  { value: "USED", label: "Used" },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="brand"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)}/>
            </Form.Item>
            <Form.Item
              name="model"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)}/>
            </Form.Item>
            <Form.Item
              name="serial"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Serial number" value={serial} onChange={(e) => setSerial(e.target.value)}/>
            </Form.Item>
          </>
        )}
        {currentStep === 1 && (
          <>
            <h2>Review Your Item Details</h2>
            <Form.Item
              name="rentalPrice"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <InputNumber
          
                style={{ width: "100%" }}
                value={rentalPrice}
                defaultValue={"10"}
                formatter={(value) =>
                  `R ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={(value) => setRentalPrice(value)}
                
              />
            </Form.Item>
            <Form.Item
              name="rentalType"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Select
                defaultValue="Select Rental Type"
                // value={}
                // onChange={handleChange}
                options={[
                  { value: null, label: "Select Rental Type", disabled: true },
                  { value: "DAILY", label: "Per Day" },
                  { value: "MONTHLY", label: "Per Month" },
                  { value: "YEARLY", label: "Yearly" },
                ]}
              />
            </Form.Item>

            <Form.Item
              name="minRentalDuration"
              required
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input
                value={minRentalDuration}
                type="number"
                placeholder="Minimum Rental Duration"
                onChange={(e) => setMinRentalDuration(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="maxRentalDuration"
              required
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input
                type="number"
                placeholder="Max Rental Duration"
                value={maxRentalDuration}
                onChange={(e) => setMaxRentalDuration(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="availableDate"
              required
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <DatePicker
               
                onChange={(date, dateString) => setAvailableDate(dateString)}
                style={{ width: "100%" }}
                placeholder="Select Availability Date"
                value={availableDate}
              />
            </Form.Item>

            <Form.Item
              name="pickup"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Select
                defaultValue="Select Delivery Options"
                
                onChange={(value) => setDeliveryOptions(value)}
                value={deliveryOptions}
                options={[
                  {
                    value: null,
                    label: "Select Delivery Options",
                    disabled: true,
                  },
                  { value: "PICKUP", label: "Pickup" },
                  { value: "SHIPPING", label: "Shipping" },
                ]}
              />
            </Form.Item>
          </>
        )}
        {currentStep === 2 && (
          <>
            <h2>Review Your Item Details</h2>
            <Form.Item
              name="usage"
              required
              style={{ width: "calc(100% - 8px)" }}
            >
              <Input.TextArea
                placeholder="Usage Instructions"
                value={usageInstructions}
                onChange={(e) => setUsageInstructions(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="lateReturnPolicy"
              required
              style={{ width: "calc(100% - 8px)" }}
            >
              <Input.TextArea
                placeholder="Late Return Policy"
                value={lateReturnPolicy}
                onChange={(e) => setLateReturnPolicy(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="cancellationPolicy"
              required
              style={{ width: "calc(100% - 8px)" }}
            >
              <Input.TextArea
                placeholder="Cancellation Policy"
                value={cancellationPolicy}
                onChange={(e) => setCancellationPolicy(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="refundPolicy"
              required
              style={{ width: "calc(100% - 8px)" }}
            >
              <Input.TextArea
                placeholder="Refund Policy"
                value={refundPolicy}
                onChange={(e) => setRefundPolicy(e.target.value)}
              />
            </Form.Item>

            {/* ... Add more policies fields */}
          </>
        )}
        {currentStep === 3 && (
          <div>
            <h2>Review Your Item Details</h2>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h2>Review Your Item Details</h2>
            <div>
              <p>Title: 123</p>
              <p>Year: 124</p>
              <p>Category: 234</p>
              <p>Description: 234</p>
              <p>Condition: 234</p>
              <p>Brand: 234</p>
              <p>Model: 234</p>
              <p>Serial Number: 234</p>
              {/* Add more fields as needed */}
            </div>
            <Form.Item
              name="acceptTerms"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message:
                    "You must accept the terms and conditions to proceed.",
                },
              ]}
            >
              <Checkbox onChange={handleAcceptTermsChange}>
                I accept the{" "}
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </Checkbox>
            </Form.Item>
          </div>
        )}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {currentStep > 0 && (
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </Button>
          )}
          {currentStep < 4 && (
            <Button type="primary" onClick={handleNextStep}>
              Next
            </Button>
          )}

          {currentStep === 4 && (
            <Button type="primary" htmlType="submit">
              Create Item
            </Button>
          )}
        </div>
      </Form>
    </div>
    </>
  );
};

export default CreateItemForm;
