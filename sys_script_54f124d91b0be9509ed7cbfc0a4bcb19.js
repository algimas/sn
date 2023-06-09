// 2023-05-31 16:47
// When transit to closed, it means the group has already populated with resolution data
// so just use the resolution data to populate the closed notes and date
(function executeRule(current, previous /*null when async*/) {
  /*
        var date = current.resolution_date ? current.resolution_date : new GlideDateTime();
        var userId = gs.getUserID();

        // if directly close the group without resolving it
        // need to populate resolution data
        if (!current.resolution_date)
            current.resolution_date = date;
        if (!current.resolved_by)
            current.resolved_by = userId;

        var currentTime = new GlideDateTime(date);
        var remediationTarget = new GlideDateTime(current.ttr_target_date);

        // Update Remediation Target status
        if ((current.ttr_status != 'no_target') && (current.ttr_status != 'past_due')) {
            // Update Remediation Target status to "Target Missed" if the
            // CVIT is closed after the Remediation Target is crossed.
            if (currentTime.compareTo(remediationTarget) > 0)
                current.ttr_status = 'past_due';
            else
                current.ttr_status = 'target_met';
        }

        // Update Close info
        current.closed_at = date;
        //current.closed_by = userId;
        if (!current.close_notes)
            current.close_notes = current.resolution_reason;
        else if (!current.resolution_reason)
            current.resolution_reason = current.close_notes;
        current.work_notes = gs.getMessage("Closed by {0}", gs.getUserDisplayName());
        if (current.resolution_reason)
            current.work_notes = gs.getMessage("Additional information: {0}", current.resolution_reason);
    */

  var hardCodedSysId = "54f124d91b0be9509ed7cbfc0a4bcb19";

  var queryString = "descriptionSTARTSWITHtestttttttttttttttttttttttt";

  var inc = new GlideRecord("incident");
  inc.addEncodedQuery(queryString);
  var validQueryCheck = inc.isValidEncodedQuery(queryString);
  inc.query();

  while (inc.next()) {
    inc.setValue("work_notes", "Some text");
    inc.update();
  }
})(current, previous); // updated// updated// 2023-05-31 14:56:00// 2023-05-31 15:02:57// 2023-06-06 08:35:12// 2023-06-06 08:42:03// 2023-06-06 08:46:15// 2023-06-06 08:51:22// 2023-06-06 14:06:56// 2023-06-06 14:18:54// 2023-06-06 14:56:41// 2023-06-06 15:03:21// 2023-06-06 15:08:29// 2023-06-06 15:39:06// 2023-06-06 15:53:48// 2023-06-06 15:59:56// 2023-06-06 16:35:09// 2023-06-06 20:34:44// 2023-06-06 20:51:21// 2023-06-06 21:04:35// 2023-06-07 06:35:53// 2023-06-07 06:40:31// 2023-06-07 06:47:02// 2023-06-07 06:50:13// 2023-06-07 07:38:40// 2023-06-07 07:46:16// 2023-06-07 08:01:02// 2023-06-07 08:08:54// 2023-06-07 08:20:38// 2023-06-07 08:27:00// 2023-06-07 08:30:32// 2023-06-07 08:57:38// 2023-06-07 09:02:26// 2023-06-07 09:14:06// 2023-06-07 09:17:46// 2023-06-07 10:06:02// 2023-06-07 10:09:35// 2023-06-07 10:13:38// 2023-06-07 10:16:04// 2023-06-07 10:21:35// 2023-06-07 10:26:38// 2023-06-07 10:47:13// 2023-06-07 10:52:22// 2023-06-07 10:55:53// 2023-06-07 10:58:52// 2023-06-07 11:01:37// 2023-06-07 14:18:53// 2023-06-07 14:24:41// 2023-06-07 14:41:23// 2023-06-07 14:45:16// 2023-06-07 14:57:07// 2023-06-07 15:01:58// 2023-06-07 15:12:04// 2023-06-07 15:26:38// 2023-06-07 15:42:33// 2023-06-07 15:48:18// 2023-06-07 15:51:55// 2023-06-07 15:56:33// 2023-06-09 09:45:34// 2023-06-09 09:51:24// 2023-06-09 09:54:22// 2023-06-09 09:58:09// 2023-06-09 10:01:36// 2023-06-09 10:04:03