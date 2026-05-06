# API Reference

## Send Email

Sends an email to a recipient.

**Endpoint:** `POST /emails`

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| from | string | yes | Sender email address |
| to | string | yes | Recipient email address |
| subject | string | yes | Email subject |
| text | string | no | Plain text body |
| html | string | no | HTML body |
| scheduledAt | string | no | ISO 8601 datetime for scheduled sends |

**Response Codes:**
| Status | Description |
|--------|-------------|
| 200 | Email sent successfully |
| 202 | Email scheduled successfully |
| 400 | scheduled_time_in_past - scheduledAt time has already passed |
| 401 | Missing API key |
| 403 | Invalid API key |
| 422 | Validation error with field-level messages |
| 429 | Rate limit exceeded |

## Cancel Email

Cancels a scheduled email.

**Endpoint:** `DELETE /emails/:id`

**Response Codes:**
| Status | Description |
|--------|-------------|
| 204 | Email cancelled successfully |
| 404 | Email not found |

## List Emails

Returns a list of sent emails.

**Endpoint:** `GET /emails`

## List Scheduled Emails

Returns a list of scheduled emails.

**Endpoint:** `GET /emails/scheduled`

**Response Codes:**
| Status | Description |
|--------|-------------|
| 200 | Scheduled emails retrieved successfully |
| 401 | Missing API key |
| 403 | Invalid API key |