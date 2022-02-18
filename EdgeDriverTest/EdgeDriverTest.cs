using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;

namespace EdgeDriverTest
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = ".";
        private EdgeDriver browser;

        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
        }

        
        [TestMethod]
        public void ExampleTest()
        {
            // Replace with your own test logic.
            browser.Url = "https://www.bing.com";
            Assert.AreEqual("Bing", browser.Title);
        }

        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            browser.Quit();
        }
    }
}
