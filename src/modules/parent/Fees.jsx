
// import React from 'react';
// import { Card, ProgressBar, Badge } from 'react-bootstrap';
// import '../App.css'; // Ensure this is imported for styles and colors

// const Fees = () => {
//   const total = 3600;
//   const paid = 2000;
//   const due = total - paid;
//   const paidPercent = Math.round((paid / total) * 100);

//   // Dynamic fee status
//   let status = '';
//   let variant = '';
//   if (paidPercent >= 90) {
//     status = '✔️ Fully Paid';
//     variant = 'success';
//   } else if (paidPercent >= 60) {
//     status = '🟡 Partial Payment';
//     variant = 'warning';
//   } else {
//     status = '❗ Payment Pending';
//     variant = 'danger';
//   }

//   return (
//     <Card className="mb-3 fade-in shadow transition-hover">
//       <Card.Body>
//         <Card.Title className="dashboard-title mb-3">💰 Fee Status</Card.Title>

//         <p><strong>Total Fee:</strong> ₹{total.toLocaleString()}</p>
//         <p><strong>Paid:</strong> ₹{paid.toLocaleString()}</p>
//         <p><strong>Due:</strong> ₹{due.toLocaleString()}</p>

//         <ProgressBar
//           now={paidPercent}
//           label={`${paidPercent}% Paid`}
//           variant={variant}
//           animated
//           className="mb-3"
//         />

//         <p className="mt-3">
//           <strong>Status:</strong>{' '}
//           <Badge
//             bg={variant}
//             className="px-3 py-2"
//             style={{ fontSize: '0.9rem' }}
//           >
//             {status}
//           </Badge>
//         </p>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Fees;


// import React from 'react';
//  import { Card, ProgressBar, } from 'react-bootstrap';
// import { FaRupeeSign, FaCheckCircle, FaExclamationTriangle, FaClock } from 'react-icons/fa';
// import '../App.css';

// const Fees = () => {
//   const total = 3600;
//   const paid = 2000;
//   const due = total - paid;
//   const paidPercent = Math.round((paid / total) * 100);

//   // Dynamic fee status with more details
//   let statusConfig = {
//     icon: <FaClock className="me-2" />,
//     variant: 'warning',
//     message: 'Partial Payment',
//     progressColor: '#FFC107',
//     bgColor: 'rgba(255, 193, 7, 0.1)',
//     borderColor: '#FFC107'
//   };

//   if (paidPercent >= 90) {
//     statusConfig = {
//       icon: <FaCheckCircle className="me-2" />,
//       variant: 'success',
//       message: 'Fully Paid',
//       progressColor: '#28A745',
//       bgColor: 'rgba(40, 167, 69, 0.1)',
//       borderColor: '#28A745'
//     };
//   } else if (paidPercent <= 30) {
//     statusConfig = {
//       icon: <FaExclamationTriangle className="me-2" />,
//       variant: 'danger',
//       message: 'Payment Pending',
//       progressColor: '#DC3545',
//       bgColor: 'rgba(220, 53, 69, 0.1)',
//       borderColor: '#DC3545',
//       pulse: true
//     };
//   }

//   return (
//     <Card className="mb-3 fade-in shadow-lg" style={{
//       borderRadius: '12px',
//       border: 'none',
//       transition: 'all 0.3s ease',
//       overflow: 'hidden'
//     }}>
//       <Card.Body className="p-4">
//         <div className="d-flex align-items-center mb-4">
//           <div style={{
//             backgroundColor: 'rgba(45, 93, 123, 0.1)',
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginRight: '12px',
//             color: 'var(--accent)'
//           }}>
//             <FaRupeeSign />
//           </div>
//           <Card.Title className="dashboard-title m-0" style={{
//             fontSize: '1.25rem',
//             fontWeight: '600'
//           }}>
//             Fee Payment Status
//           </Card.Title>
//         </div>

//         <div className="d-flex justify-content-between mb-4">
//           <div className="text-center p-3 rounded" style={{
//             backgroundColor: 'rgba(45, 93, 123, 0.05)',
//             flex: 1,
//             marginRight: '10px',
//             transition: 'all 0.3s ease'
//           }}>
//             <div className="text-muted mb-1">Total Fee</div>
//             <div className="h4 font-weight-bold" style={{ color: 'var(--accent)' }}>
//               ₹{total.toLocaleString()}
//             </div>
//           </div>
          
//           <div className="text-center p-3 rounded" style={{
//             backgroundColor: 'rgba(40, 167, 69, 0.05)',
//             flex: 1,
//             marginRight: '10px',
//             transition: 'all 0.3s ease'
//           }}>
//             <div className="text-muted mb-1">Paid</div>
//             <div className="h4 font-weight-bold text-success">
//               ₹{paid.toLocaleString()}
//             </div>
//           </div>
          
//           <div className="text-center p-3 rounded" style={{
//             backgroundColor: 'rgba(220, 53, 69, 0.05)',
//             flex: 1,
//             transition: 'all 0.3s ease'
//           }}>
//             <div className="text-muted mb-1">Due</div>
//             <div className="h4 font-weight-bold text-danger">
//               ₹{due.toLocaleString()}
//             </div>
//           </div>
//         </div>

//         <div className="mb-4">
//           <div className="d-flex justify-content-between mb-2">
//             <span className="text-muted">Payment Progress</span>
//             <span style={{ fontWeight: '600' }}>{paidPercent}%</span>
//           </div>
//           <ProgressBar
//             now={paidPercent}
//             label={`${paidPercent}%`}
//             variant={statusConfig.variant}
//             animated
//             style={{
//               height: '12px',
//               borderRadius: '6px',
//               boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
//             }}
//           />
//         </div>

//         <div className="p-3 rounded d-flex align-items-center" style={{
//           backgroundColor: statusConfig.bgColor,
//           borderLeft: `4px solid ${statusConfig.borderColor}`,
//           animation: statusConfig.pulse ? 'pulse 2s infinite' : 'none'
//         }}>
//           <div style={{
//             color: statusConfig.borderColor,
//             fontSize: '1.2rem',
//             marginRight: '12px'
//           }}>
//             {statusConfig.icon}
//           </div>
//           <div>
//             <div className="font-weight-bold" style={{ 
//               color: statusConfig.borderColor,
//               marginBottom: '2px'
//             }}>
//               {statusConfig.message}
//             </div>
//             <div className="text-muted small">
//               {paidPercent >= 90 ? 'All fees cleared' : 
//                paidPercent >= 60 ? `₹${due.toLocaleString()} remaining` : 
//                'Please make payment soon'}
//             </div>
//           </div>
//         </div>

//         <div className="mt-4 text-center">
//           <button className="btn btn-primary" style={{
//             backgroundColor: 'var(--accent)',
//             border: 'none',
//             borderRadius: '20px',
//             padding: '8px 24px',
//             fontWeight: '600',
//             boxShadow: '0 4px 8px rgba(45, 93, 123, 0.2)',
//             transition: 'all 0.3s ease'
//           }}>
//             Make Payment
//           </button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Fees;


import React, { useState } from 'react';
import { Card, ProgressBar, Modal, Button } from 'react-bootstrap';
import { FaRupeeSign, FaCheckCircle, FaExclamationTriangle, FaClock, FaCreditCard } from 'react-icons/fa';
// import './modules/parent/styles.css';
import './styles.css';



const Fees = () => {
  const total = 3600;
  const paid = 2000;
  const due = total - paid;
  const paidPercent = Math.round((paid / total) * 100);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(due);
  const [paymentStatus, setPaymentStatus] = useState(null);

  let statusConfig = {
    icon: <FaClock className="me-2" />,
    variant: 'warning',
    message: 'Partial Payment',
    progressColor: '#FFC107',
    bgColor: 'rgba(255, 193, 7, 0.1)',
    borderColor: '#FFC107'
  };

  if (paidPercent >= 90) {
    statusConfig = {
      icon: <FaCheckCircle className="me-2" />,
      variant: 'success',
      message: 'Fully Paid',
      progressColor: '#28A745',
      bgColor: 'rgba(40, 167, 69, 0.1)',
      borderColor: '#28A745'
    };
  } else if (paidPercent <= 30) {
    statusConfig = {
      icon: <FaExclamationTriangle className="me-2" />,
      variant: 'danger',
      message: 'Payment Pending',
      progressColor: '#DC3545',
      bgColor: 'rgba(220, 53, 69, 0.1)',
      borderColor: '#DC3545',
      pulse: true
    };
  }

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setShowPaymentModal(true);
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_X0ttERlr0afucZ', // Replace with your Razorpay Test Key
      amount: paymentAmount * 100,
      currency: 'INR',
      name: 'School Fees Payment',
      description: 'Payment for school fees',
      image: '/images/school-logo.png',
      handler: function (response) {
        setPaymentStatus('success');
        console.log('Payment success:', response);
      },
      prefill: {
        name: 'Parent Name',
        email: 'parent@example.com',
        contact: '9876543210'
      },
      notes: {
        address: 'School Fees Payment'
      },
      theme: {
        color: '#2D5D7B'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();

    rzp1.on('payment.failed', function (response) {
      alert("Oops! Something went wrong.\nPayment Failed");
      console.error(response.error);
      setPaymentStatus('failed');
    });
  };

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
    setPaymentStatus(null);
  };

  return (
    <>
      <Card className="mb-3 fade-in shadow-lg" style={{ borderRadius: '12px', border: 'none', transition: 'all 0.3s ease', overflow: 'hidden' }}>
        <Card.Body className="p-4">
          <div className="d-flex align-items-center mb-4">
            <div style={{
              backgroundColor: 'rgba(45, 93, 123, 0.1)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              color: 'var(--accent)'
            }}>
              <FaRupeeSign />
            </div>
            <Card.Title className="dashboard-title m-0" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
              Fee Payment Status
            </Card.Title>
          </div>

          <div className="d-flex justify-content-between mb-4">
            <div className="text-center p-3 rounded" style={{
              backgroundColor: 'rgba(45, 93, 123, 0.05)', flex: 1, marginRight: '10px', transition: 'all 0.3s ease'
            }}>
              <div className="text-muted mb-1">Total Fee</div>
              <div className="h4 font-weight-bold" style={{ color: 'var(--accent)' }}>
                ₹{total.toLocaleString()}
              </div>
            </div>

            <div className="text-center p-3 rounded" style={{
              backgroundColor: 'rgba(40, 167, 69, 0.05)', flex: 1, marginRight: '10px', transition: 'all 0.3s ease'
            }}>
              <div className="text-muted mb-1">Paid</div>
              <div className="h4 font-weight-bold text-success">
                ₹{paid.toLocaleString()}
              </div>
            </div>

            <div className="text-center p-3 rounded" style={{
              backgroundColor: 'rgba(220, 53, 69, 0.05)', flex: 1, transition: 'all 0.3s ease'
            }}>
              <div className="text-muted mb-1">Due</div>
              <div className="h4 font-weight-bold text-danger">
                ₹{due.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Payment Progress</span>
              <span style={{ fontWeight: '600' }}>{paidPercent}%</span>
            </div>
            <ProgressBar now={paidPercent} label={`${paidPercent}%`} variant={statusConfig.variant} animated
              style={{ height: '12px', borderRadius: '6px', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }} />
          </div>

          <div className="p-3 rounded d-flex align-items-center" style={{
            backgroundColor: statusConfig.bgColor,
            borderLeft: `4px solid ${statusConfig.borderColor}`,
            animation: statusConfig.pulse ? 'pulse 2s infinite' : 'none'
          }}>
            <div style={{ color: statusConfig.borderColor, fontSize: '1.2rem', marginRight: '12px' }}>
              {statusConfig.icon}
            </div>
            <div>
              <div className="font-weight-bold" style={{ color: statusConfig.borderColor, marginBottom: '2px' }}>
                {statusConfig.message}
              </div>
              <div className="text-muted small">
                {paidPercent >= 90 ? 'All fees cleared' : paidPercent >= 60 ? `₹${due.toLocaleString()} remaining` : 'Please make payment soon'}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button className="btn btn-primary" onClick={handlePayment}
              style={{
                backgroundColor: 'var(--accent)',
                border: 'none',
                borderRadius: '20px',
                padding: '8px 24px',
                fontWeight: '600',
                boxShadow: '0 4px 8px rgba(45, 93, 123, 0.2)',
                transition: 'all 0.3s ease'
              }}>
              Make Payment
            </button>
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showPaymentModal} onHide={handlePaymentModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><FaCreditCard className="me-2" /> Payment Gateway</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {paymentStatus === 'success' ? (
            <div className="text-center py-4">
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#28a745',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '2rem'
              }}>✓</div>
              <h4 className="text-success">Payment Successful!</h4>
              <p>Your payment of ₹{paymentAmount} has been processed successfully.</p>
              <p>A receipt has been sent to your email.</p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="form-label">Amount to Pay (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(Math.min(Number(e.target.value), due))}
                  min="1"
                  max={due}
                />
                <div className="form-text">Maximum due amount: ₹{due}</div>
              </div>

              <div className="alert alert-info">
                <h6>Payment Methods</h6>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <span className="badge bg-light text-dark p-2">Credit Card</span>
                  <span className="badge bg-light text-dark p-2">Debit Card</span>
                  <span className="badge bg-light text-dark p-2">Net Banking</span>
                  <span className="badge bg-light text-dark p-2">UPI</span>
                  <span className="badge bg-light text-dark p-2">Wallet</span>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {paymentStatus !== 'success' ? (
            <>
              <Button variant="secondary" onClick={handlePaymentModalClose}>Cancel</Button>
              <Button variant="primary" onClick={handlePayment}>Proceed to Pay ₹{paymentAmount}</Button>
            </>
          ) : (
            <Button variant="success" onClick={handlePaymentModalClose}>Done</Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Fees;
