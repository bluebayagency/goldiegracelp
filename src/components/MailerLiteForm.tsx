'use client'

import Script from 'next/script'

export function MailerLiteForm() {
  return (
    <>
      <div
        id="mlb2-41580428"
        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41580428"
      >
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">

            <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/2366599/forms/188028380184053585/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent horozintalForm">
                  <div className="ml-form-horizontalRow">
                    <div className="ml-input-horizontal">
                      <div style={{ width: '100%' }} className="horizontal-fields">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input
                            type="email"
                            className="form-control"
                            data-inputmask=""
                            name="fields[email]"
                            placeholder="Email"
                            autoComplete="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-button-horizontal primary">
                      <button type="submit" className="primary">Subscribe</button>
                      <button disabled style={{ display: 'none' }} type="button" className="loading">
                        <div className="ml-form-embedSubmitLoad" />
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />

                <div className="ml-mobileButton-horizontal">
                  <button type="submit" className="primary">Subscribe</button>
                  <button disabled style={{ display: 'none' }} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad" />
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>

                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>

            <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Script id="ml-webform-success-41580428" strategy="afterInteractive">{`
        function ml_webform_success_41580428() {
          var $ = ml_jQuery || jQuery;
          $('.ml-subscribe-form-41580428 .row-success').show();
          $('.ml-subscribe-form-41580428 .row-form').hide();
        }
      `}</Script>

      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b"
        strategy="afterInteractive"
        onLoad={() => {
          fetch('https://assets.mailerlite.com/jsonp/2366599/forms/188028380184053585/takel')
        }}
      />
    </>
  )
}
