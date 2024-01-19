/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { AddNewLeadModel } from "./addNewLeadModel";
import { Link } from "react-router-dom";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { leadTableHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import { tradeType } from "../../Constants/newLeadContants";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../context/authContext";
import { EmailVerfificationModal } from "../../common-components/models/emailVerificationModal";
import jsPDF from "jspdf";
import { filePath } from "../../common-components/useCommonUsableFunctions";
import * as pdfjsLib from "pdfjs-dist/webpack.mjs";

export const Lead = () => {
  const { user, NewAxiosInstance } = useAuth();
  const [newLeadModal, setNewLeadModal] = useState(false);
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [leadData, setLeadData] = useState(null);
  const [leadIndex, setLeadIndex] = useState(null);
  const [deleteLeadModal, setDeleteLeadModal] = useState(false);
  const [viewLead, setViewLead] = useState(false);
  const [leadTab, setLeadTab] = useState("all");
  const [mailModal, setMailModal] = useState(false);

  const [tradeTypes, setTradeTypes] = useState([]);
  const [registrationTypes, setRegistrationTypes] = useState([]);
  const filterTypes = {
    registrationType: "",
    tradeType: "",
    textSearch: "",
  };
  const [selectedFilter, setSelectedFilter] = useState(filterTypes);

  const showLeadModal = (data, type, index) => {
    setLeadIndex(index);
    if (data) {
      setLeadData(data);
    } else if (!data) {
      setLeadData(null);
    }
    if (type == "delete") {
      setDeleteLeadModal(true);
      setMailModal(false);
      setViewLead(false);
    } else if (type == "view") {
      setViewLead(true);
      setDeleteLeadModal(false);
      setMailModal(false);
    } else if (type == "sendMail") {
      setMailModal(true);
      setDeleteLeadModal(false);
      setViewLead(false);
    } else {
      setMailModal(false);
      setDeleteLeadModal(false);
      setViewLead(false);
    }
    if (type != "delete" && type != "sendMail") setNewLeadModal(!newLeadModal);
  };

  useEffect(() => {
    getAllLeads();
    getRegistrationTypes();
    getTradeTypes();
  }, [selectedFilter]);

  const getTradeTypes = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/trades/getTradeTypes");
      setTradeTypes(data.allTradeTypes);
    } catch (err) {
      console.error(err);
    }
  };

  const getRegistrationTypes = async () => {
    try {
      const { data } = await NewAxiosInstance.get(
        "/registrationType/getRegistrationTypes",
      );
      setRegistrationTypes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateLeads = (leadData) => {
    const checkLeads = leads.filter((e) => e._id == leadData._id);
    if (checkLeads.length) {
      leads.map((e, index) => {
        if (e._id == checkLeads[0]._id) {
          leads[index] = leadData;
          setLeads([...leads]);
          return;
        }
      });
      updateLeadList(leadTab, leadData);
    } else {
      const allLeads = [leadData].concat(leads);
      setLeads([...allLeads]);
      if (leadTab == "new" || leadTab == "all")
        updateLeadList(leadTab, leadData);
    }
  };

  const getAllLeads = async (filterLead) => {
    try {
      const { data } = await NewAxiosInstance.get("/leads/getAllLeads", {
        params: selectedFilter,
      });
      data.leads.map((lead) => {
        tradeType.map((e) => {
          if (e.value == lead.tradeType) lead.tradeType = e.name;
        });
      });
      setLeads(data.leads);
      setFilteredLeads(data.leads);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteLead = async (leadData) => {
    try {
      toast.dismiss();
      const { data } = await NewAxiosInstance.delete("/leads/deleteLead", {
        params: leadData,
      });
      toast.success("lead deleted");
      const filterLeads = leads.filter((e) => e._id != leadData._id);
      setLeads([...filterLeads]);
      updateLeadList("delete", leadData);
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  const updateLeadList = (type, leadData) => {
    switch (type) {
      case "all":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            setFilteredLeads([...filteredLeads]);
          } else {
            const allLeads = [leadData].concat(filteredLeads);
            setFilteredLeads([...allLeads]);
          }
        } else {
          setFilteredLeads([...leads]);
        }
        break;
      case "new":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const newLeads = filteredLeads.filter(
              (e) => e.status != "pending" && e.status == "new",
            );
            setFilteredLeads([...newLeads]);
          } else {
            const allLeads = [leadData].concat(filteredLeads);
            setFilteredLeads([...allLeads]);
          }
        } else {
          const newLeads = leads.filter(
            (e) => e.status != "pending" && e.status == "new",
          );
          setFilteredLeads([...newLeads]);
        }
        break;
      case "pending":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const pendingLeads = filteredLeads.filter(
              (e) => e.status != "assign" && e.status == "pending",
            );
            setFilteredLeads([...pendingLeads]);
          }
        } else {
          const pendingLeads = leads.filter(
            (e) => e.status != "assign" && e.status == "pending",
          );
          setFilteredLeads([...pendingLeads]);
        }
        break;
      case "assign":
        if (leadData) {
          const checkLeads = filteredLeads.filter((e) => e._id == leadData._id);
          if (checkLeads.length) {
            filteredLeads[leadIndex] = leadData;
            const assignedLeads = filteredLeads.filter(
              (e) => e.status != "confirmed" && e.status == "assign",
            );
            setFilteredLeads([...assignedLeads]);
          }
        } else {
          const assignedLeads = leads.filter(
            (e) => e.status != "confirmed" && e.status == "assign",
          );
          setFilteredLeads([...assignedLeads]);
        }
        break;
      case "delete":
        const newLeads = filteredLeads.filter((e) => e._id != leadData._id);
        setFilteredLeads([...newLeads]);
        break;
    }
    if (type != "delete") setLeadTab(type);
  };

  const clearFilters = () => {
    setSelectedFilter((old) => ({ ...filterTypes }));
  };

  const updateLeadStatus = async () => {
    try {
      const updateLeadStatus = await NewAxiosInstance.post(
        "/leads/updateLeadStatus" + `/${leadData._id}/${leadData.status}`,
      );
      if (updateLeadStatus.status == 200) {
        if (leadData.status == "pending") {
          leadData.status = "assign";
        } else if (leadData.status == "assign") {
          leadData.status = "confirmed";
        }
        updateLeads(leadData);
        toast.success(updateLeadStatus.data.message);
      } else {
        toast.error("something went wrong");
      }
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const downloadSelectedLead = async (leadId) => {
    try {
      const response = await NewAxiosInstance.get("/leads/getSelectedLead", {
        params: { _id: leadId },
      });
      if (response.status == 200) downloadSelectedLeadPdf(response.data?.lead);
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const downloadSelectedLeadPdf = async (data) => {
    const doc = new jsPDF();

    let yPosition = 15;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(
      `${data.registrationType.toUpperCase()} Registration Form : ${
        data.tradeType
      }`,
      20,
      yPosition,
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    yPosition += 15;
    doc.text(data.companyName, 20, yPosition);

    doc.setFontSize(10);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Company Name* : `, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.companyName, 54, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Company UEN No.* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.companyUEN, 60, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Company Address* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.companyAddress, 60, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Postal Code* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.postalCode, 45, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Contact Person* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.contactPerson, 54, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Contact Person's Mobile* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(`${data.contactPersonMobile}`, 70, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Contact Person's EMAIL Address* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.contactPersonEmail, 85, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Office Telephone No.* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(`${data.officeTelephone}`, 60, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Office Fax No.* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.officeFax, 54, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Name Of Participant* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.participantName, 60, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Participant's NRIC / FIN No.* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.participantNRIC, 75, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Participant's Mobile* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(`${data.participantMobile}`, 60, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Alternat Mobile No. (if any)* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(
      data.alternateMobile?.length ? `${data.alternateMobile}` : "NA",
      70,
      yPosition,
    );

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(`Trade Type* :`, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(data.tradeType, 45, yPosition);

    doc.setFont("helvetica", "bold");
    yPosition += 10;
    doc.text(
      `CoreTrade / Multi-Skilling / Direct R1 Registration No.* :`,
      20,
      yPosition,
    );

    doc.setFont("helvetica", "normal");
    doc.text(data.coreTradeRegNo, 116, yPosition);

    yPosition += 10;
    doc.text("Attachments : ", 20, yPosition);
    doc.setTextColor("blue");

    for (let file of Object.keys(data.fileLocations)) {
      if (data.fileLocations[file]?.length) {
        doc.addPage();
        const type = data.fileLocations[file].split(".")[1];
        if (
          type == "jpg" ||
          type == "jpeg" ||
          type == "png" ||
          type == "wpeg"
        ) {
          doc.addImage(
            filePath(data.fileLocations[file]),
            "PDF",
            0,
            0,
            210,
            300,
          );
        } else {
          const pdfUrl = filePath(data.fileLocations[file]);

          const pdfData = await pdfjsLib.getDocument(pdfUrl).promise;

          const getPageAsImage = async (pdf, pageNum) => {
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 2 });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({ canvasContext: context, viewport }).promise;

            return canvas.toDataURL("image/png");
          };

          for (let pageNum = 1; pageNum <= pdfData.numPages; pageNum++) {
            const imageDataUrl = await getPageAsImage(pdfData, pageNum);
            doc.addImage(imageDataUrl, "PNG", 0, 0, 210, 300); // Adjust the coordinates and size as needed

            if (pageNum !== pdfData.numPages) {
              doc.addPage();
            }
          }
        }
      }
    }
    doc.save(
      `${
        data.contactPerson + Date.now() + Math.round(Math.random() + 1e9)
      }.pdf`,
    );
  };

  return (
    <div id='layout-wrapper'>
      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header d-flex align-items-center justify-content-between'>
                    <div className='card-title'>
                      <FormattedMessage
                        id='Lead_List'
                        defaultMessage='Lead List'
                      />
                    </div>
                    <div className='row w-75'>
                      <div className='col-xl-4'>
                        <select
                          className='form-select'
                          onChange={({ target }) => {
                            setSelectedFilter((old) => ({
                              ...old,
                              tradeType: target.value,
                            }));
                          }}
                          value={selectedFilter.tradeType}
                        >
                          <option value=''>Select Trade Type</option>
                          {tradeTypes.map((type) => (
                            <option key={type._id} value={type._id}>
                              {type?.tradeType}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='col-xl-4'>
                        <select
                          className='form-select'
                          onChange={({ target }) => {
                            setSelectedFilter((old) => ({
                              ...old,
                              registrationType: target.value,
                            }));
                          }}
                          value={selectedFilter.registrationType}
                        >
                          <option value=''>Select Registration Type</option>
                          {registrationTypes.map((type) => (
                            <option key={type._id} value={type._id}>
                              {type?.registrationName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='col-xl-4'>
                        <div className='d-flex' role='search'>
                          <input
                            className='form-control me-2'
                            type='search'
                            placeholder='Search'
                            onChange={({ target }) => {
                              setSelectedFilter((old) => ({
                                ...old,
                                textSearch: target.value,
                              }));
                            }}
                            value={selectedFilter.textSearch}
                          />{" "}
                          <button
                            onClick={clearFilters}
                            className=' btn btn-light'
                            type='submit'
                            style={{ width: "200px" }}
                          >
                            <FormattedMessage
                              id='Clear_Filters'
                              defaultMessage='Clear Filters'
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='btns'>
                      {user.userData?.roleData?.lead?.create && (
                        <button
                          className='mx-1 btn btn-primary'
                          onClick={() => showLeadModal()}
                          style={{ height: "20px", padding: "0 0.5rem" }}
                        >
                          <i className='bx bx-plus fw-semibold align-middle' />{" "}
                          <FormattedMessage
                            id='Add_New'
                            defaultMessage='Add New'
                          />
                        </button>
                      )}
                      <Link
                        to='/lead/lead-grid'
                        className='btn mx-1 btn-primary me-2'
                        style={{ height: "20px", padding: "0 0.5rem" }}
                      >
                        <i className='bx bxs-grid-alt fw-semibold align-middle'></i>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className='card-body'>
                      <CommonDataTable
                        data={filteredLeads}
                        tableHeaders={leadTableHeaders}
                        actionButtons
                        editButton={user.userData?.roleData?.lead?.write}
                        tableSearchBar={false}
                        deleteButton={user.userData?.roleData?.lead?.delete}
                        callback={(e, type, index) =>
                          showLeadModal(e, type, index)
                        }
                        verificationMailButton
                        checkMailButtonClick
                        checkMailFunction={(row) => {
                          if (!row.original?.class?.length) {
                            toast.error("please Select Course");
                            return true;
                          } else {
                            return false;
                          }
                        }}
                        updateLeadList={(e) => updateLeadList(e)}
                        leadModelButtons
                        downloadbutton
                        downloadFunction={(leadId) =>
                          downloadSelectedLead(leadId)
                        }
                      />
                      <div className='category-container mb-0 '></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      {newLeadModal && (
        <AddNewLeadModel
          setIsOpen={setNewLeadModal}
          isOpen={newLeadModal}
          leadData={leadData}
          callback={(e) => updateLeads(e)}
          viewLead={viewLead}
          setLeadData={setLeadData}
          registrationTypes={registrationTypes}
          tradeTypes={tradeTypes}
        />
      )}
      {deleteLeadModal && (
        <DeleteModel
          setIsOpen={setDeleteLeadModal}
          isOpen={deleteLeadModal}
          message={`do you really want to delete this Lead`}
          callback={(e) => deleteLead(e)}
          deleteHeader={"Lead"}
          data={leadData}
        />
      )}
      {mailModal && (
        <EmailVerfificationModal
          isOpen={mailModal}
          setIsOpen={setMailModal}
          mailHeader={"Customer"}
          afterSendMailCallback={() => updateLeadStatus()}
          userData={{ email: leadData.contactPersonEmail, subject: "" }}
          mailText={``}
        />
      )}
    </div>
  );
};
