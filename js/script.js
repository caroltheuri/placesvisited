//business logic
function Place(location, landmark, year,transport,duration, feature, delicacy){
  this.locationName =location;
  this.landmarkName=landmark;
  this.yearTime= year;
  this.transportMeans= transport;
  this.durationPeriod=duration;
  this.featureName= feature;
  this.delicacyName= delicacy;
}

//user logic
$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();
      var inputLocality=$("input#location").val();
      var inputLandmark=$("input#landmark").val();
      var inputSeason=$("input#time-of-year").val();
      var inputTransport=$("input#transport").val();
      var inputDuration=$("input#duration").val();
      var inputFeature=$("input#feature").val();
      var inputDelicacy=$("input#delicacy").val();

      var finalDestination= new Place(inputLocality, inputLandmark, inputSeason, inputTransport, inputDuration, inputFeature,inputDelicacy);
      $("ul#places").append("<li><span class='place'>"+
       finalDestination.locationName +"</span></li>");

       $(".place").last().click(function(){
         $(".show-result").show();
         $(".show-result h2").text(finalDestination.locationName);
         $(".location").text(finalDestination.locationName);
         $(".landmark").text(finalDestination.landmarkName);
         $(".time-of-year").text(finalDestination.yearTime);
         $(".transport").text(finalDestination.transportMeans);
         $(".duration").text(finalDestination.durationPeriod);
         $(".feature").text(finalDestination.featureName);
         $(".delicacy").text(finalDestination.delicacyName);
       })

  });
});
