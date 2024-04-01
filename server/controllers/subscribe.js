import userLiked from "../models/userLiked";

export const subscribe = async (req, res) => {
  const { userId, channelId } = req.body;
  console.log("we got the userId and channelId as", userId, channelId);
  try {
    const founduser = await userLiked.findOne({ userId });
    if (founduser) {
      const subscribedList = founduser?.subscribed;
      const index = subscribedList.indexOf(channelId);
      if (index !== -1) {
        subscribedList.splice(index, 1);
      } else {
        subscribedList.push(channelId);
      }
      const updateduser = await userLiked.findByIdAndUpdate(
        { userId },
        { subscribed: subscribedList },
        { new: true }
      );
      res
        .status(200)
        .json({ message: "subscribed or unsubscribed the channel" });
      console.log("user subscribed new channel ", channelId);
    } else {
      const newuser = await userLiked.create({
        userId: userId,
        subscribed: [channelId],
      });
      await newuser.save();
      console.log("new user subscribed channel ", channelId);
      res.status(200).json({ message: "subscribed channel with new user" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
