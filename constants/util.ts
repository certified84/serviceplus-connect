const formatGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

const formatMoney = (amount: number) => {
  return `₦ ${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2, // Minimum number of decimal digits
    maximumFractionDigits: 2, // Maximum number of decimal digits
  })}`;
}


export { formatGreeting, formatMoney}