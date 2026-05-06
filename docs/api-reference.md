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

**Response Codes:**
| Status | Description |
|--------|-------------|
| 200 | Email sent successfully |
| 400 | Check that parameters were correct |
| 401 | Missing API key |
| 403 | Invalid API key |
| 429 | Rate limit exceeded |

## List Emails

Returns a list of sent emails.

**Endpoint:** `GET /emails`

## List Scheduled Emails

Returns a list of scheduled emails that have not yet been sent.

**Endpoint:** `GET /emails/scheduled`

**Response Codes:**
| Status | Description |
|--------|-------------|
| 200 | Scheduled emails retrieved successfully |
| 401 | Missing API key |
| 403 | Invalid API key |