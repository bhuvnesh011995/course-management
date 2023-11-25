import { useCallback, useEffect, useState } from "react";
import { Card, Toast, ToastContainer } from "react-bootstrap";

export default function System({show,setShow}) {
  return (
    
    <Card>
        <Card.Body>
        <form action="">
<div class="tab-pane">

        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                System Name
              </label>
              <input
                type="text"
                class="form-control"
                
                placeholder="Enter System Name"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label>System Logo</label>
              <input type="file" class="form-control" />
              <small>Upload files only: gif,png,jpg,jpeg</small> <br />
              <small>- Best Size: 32x27</small> <br />
              <small>- Light logo</small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="">Favicon</label>
              <input type="file" class="form-control" />
              <small>- Upload files only: gif,ico,png</small> <br />
              <small>- Best Size: 16x16</small> <br />
            </div>
          </div>

          <div class="col-md-4">
            <div class="mb-3">
              <label class="form-label">Footer Text</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Footer Text"
              />
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
