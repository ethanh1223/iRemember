import React from 'react';

import AudioUpload from './webAudioUpload.js';

var ReminderList = (props) => (
  <div className="reminder-form">
    <h5>New Reminder</h5>
    <form>
      <label>
        Time:
        <input className="date" type="datetime-local" value={props.date} onChange={props.getInput}/>
      </label>
      <br/>
      <label>
        Type:
        <select className="type" value={props.type} onChange={props.getInput} required>
          <option value='medication'>Medication</option>
          <option value='appointment'>Appointment</option>
          <option value='others'>Others</option>
        </select>
      </label>
      <br/>
      <label>
        Recurring:
        <label>
          <input 
            name="recurring"
            className="recurring"
            type="radio"
            value={false}
            onChange={props.getBoolean}
            checked={props.recurring? false: true}/>
          Once
        </label>
        <label>
          <input 
            name="recurring"
            className="recurring"
            type="radio"
            value={true}
            onChange={props.getBoolean}
            checked={props.recurring? true: false}/>
          Recurring
        </label>
      </label>
      <br/>
      <label>Upload Audio Message:
        <AudioUpload getAudio={props.getAudio} />
      </label>
      <label>Title:
        <input type="text" value={props.title} className="title" placeholder="Title" onChange={props.getInput} />
      </label>
      <label>Notes:
        <br/>
        <input type="text" value={props.note} className="note" placeholder="Notes" onChange={props.getInput}/>
        <br/>
      </label>
        <input type="submit" value="Submit" onClick={props.submitForm}/>
    </form>
  </div>
);

module.exports = ReminderList;

