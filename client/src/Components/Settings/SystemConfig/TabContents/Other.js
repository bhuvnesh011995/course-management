import { useCallback, useEffect, useState } from "react";
import { Card, Toast, ToastContainer } from "react-bootstrap";

export default function Other({show,setShow}) {
    
  return (
    
    <Card>
        <Card.Body>
        <form action="">
<div class="tab-pane">

        <div class="row">
     
          <div class="col-md-4">
            <div class="mb-3">
              <label>Login Logo</label>
              <input type="file" class="form-control" />
              <small>Upload files only: gif,png,jpg,jpeg</small> <br />
            </div>
          </div>

          <div class="col-md-4">
            <div class="mb-3">
              <label for="">Attendance Logo</label>
              <input type="file" class="form-control" />
              <small>- Upload files only: jpg,jpeg,png</small> <br />
            </div>
          </div>

          <div class="col-md-4">
            <div class="mb-3">
              <label for="">Lead Payment pdf Logo</label>
              <input type="file" class="form-control" />
              <small>- Upload files only: jpg,jpeg,png</small> <br />
            </div>
          </div>
       
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Default Language
              </label>
              <select></select>
            </div>
          </div>

          
        </div>
     
    </div>
    <button
            onClick={() => {}}
            type="button"
            class="btn btn-primary waves-effect waves-light w-25 float-end"
          >
            SAVE
          </button>
    </form>
        </Card.Body>
    </Card>
      
  );
}
