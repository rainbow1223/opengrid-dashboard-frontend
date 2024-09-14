import { RiInformationLine } from "react-icons/ri";

export function BillingInformationSection() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="mx-auto mt-5 max-w-5xl ">
        <div className="border border-indigo-900 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-orange-600">
            <RiInformationLine />
            Important Information
          </div>

          <div className="mt-5 grid grid-cols-2">
            <div className="text-gray-400 text-sm">
              <h3 className="text-white font-medium">
                How to add credit to your account?
              </h3>
              <p className="mt-2 ">
                1. Click on the "Add Credit" button anywhere on the dashboard.
              </p>
              <p>
                2. Choose one of the available currencies & the amount you want
                to add to your account.
              </p>
              <p>3. Review your order and click on the "Continue" button.</p>
              <p>
                4. You will be redirected to the payment detail page where you
                can find the payment address.
              </p>
              <p>
                5. Make a payment to the payment address using your favorite
                wallet.
              </p>
            </div>

            <div className="text-gray-400 text-sm">
              <h3 className="text-white font-medium">
                How does the payment system work?
              </h3>
              <p className="mt-2 ">
                1. You make a payment to the payment address provided by
                NowPayments.
              </p>
              <p>
                2. The payment is confirmed by the blockchain network. Please
                note that the confirmation time may vary depending on the
                blockchain network. it may take up to 30 minutes for the payment
                to be confirmed.
              </p>
              <p>
                3. The payment then will be send to VPSAI for processing and
                crediting your account.
              </p>
              <p>
                4. VPSAI will then process the payment and credit your account.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mt-5 text-2xl text-white font-medium">
            Payment History
          </h1>
        </div>
      </div>
    </div>
  );
}
